import React, { useState, useCallback, useEffect } from "react";
import { AddressAutofill, AddressMinimap, useConfirmAddress, config } from "@mapbox/search-js-react";
import { Link } from "react-router-dom";

export default function AutofillCheckout() {
  const [showFormExpanded, setShowFormExpanded] = useState(false);
  const [showMinimap, setShowMinimap] = useState(false);
  const [feature, setFeature] = useState();
  const [showValidationText, setShowValidationText] = useState(false);
  const [token, setToken] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    const accessToken = "pk.eyJ1Ijoidm95YWdlcHJpdmUiLCJhIjoiY2ptcHoxN2g0MWZ3NjNxb2UyZzNxZm96YiJ9.EZUY54glmQCHh6wiiw4Qvw";
    setToken(accessToken);
    config.accessToken = accessToken;
  }, []);

  const { formRef, showConfirm } = useConfirmAddress({
    minimap: true,
    skipConfirmModal: (feature) => {
      ["exact", "high"].includes(feature.properties.match_code.confidence);
    },
  });
  const handleChange = (event) => {
    const value = event.target.value;
    setAddress(value);
  };


  const handleRetrieve = useCallback(
   
    (res) => {
      const feature = res.features[0];
      setFeature(feature);
      setShowMinimap(true);
      setShowFormExpanded(true);
    },
    [setFeature, setShowMinimap]
    
   
  );

  function handleSaveMarkerLocation(coordinate) {
    console.log(`Marker moved to ${JSON.stringify(coordinate)}.`);
    console.log(address,"address")
  }

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const result = await showConfirm();
      if (result.type === "nochange") submitForm();
    },
    [showConfirm]
  );

  function submitForm() {
    setShowValidationText(true);
    setTimeout(() => {
      resetForm();
    }, 2500);
  }

  function resetForm() {
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => (input.value = ""));
    setShowFormExpanded(false);
    setShowValidationText(false);
    setFeature(null);
  }

  return (
    <>
      <form ref={formRef} className="flex flex--column" onSubmit={handleSubmit}>
        <div className="grid grid--gut24 mb60">
          <div className="col col--auto-mm w-full">
            {/* Input form */}
            <AddressAutofill accessToken={token} onRetrieve={handleRetrieve}>
              <div className="row-group-search home1 st">
                <div className="form-group-1">
                  <input
                    className="input mb12 input-filter-search"
                    placeholder="Indiquez l'adresse de votre bien"
                    autoComplete="address-line1"
                    id="mapbox-autofill"
                    type="text"
                    value={address}
                    onChange={handleChange}
                  />
                </div>
               
                <div className="form-group-4 header-customize-item-2">
                  <Link
                    type="submit"
                    to="/estimate"
                    className="header-customize-item-2"
                    id="btn-confirm"
                  >
                    ESTIMER
                  </Link>
                </div>
              </div>
            </AddressAutofill>
            <div
              className="secondary-inputs"
              style={{ display: showFormExpanded ? "block" : "none" }}
            >
              <label className="txt-s txt-bold color-gray mb3">
                Address Line 2
              </label>
              <input
                className="input mb12"
                placeholder="Apartment, suite, unit, building, floor, etc."
                autoComplete="address-line2"
              />
              <label className="txt-s txt-bold color-gray mb3">City</label>
              <input
                className="input mb12"
                placeholder="City"
                autoComplete="address-level2"
              />
              <label className="txt-s txt-bold color-gray mb3">
                State / Region
              </label>
              <input
                className="input mb12"
                placeholder="State / Region"
                autoComplete="address-level1"
              />
              <label className="txt-s txt-bold color-gray mb3">
                ZIP / Postcode
              </label>
              <input
                className="input"
                placeholder="ZIP / Postcode"
                autoComplete="postal-code"
              />
            </div>
          </div>
          <div className="col col--auto-mm">
            {/* Visual confirmation map */}
            <div id="minimap-container" className="h240 w360 relative mt18">
              <AddressMinimap
                canAdjustMarker={true}
                satelliteToggle={true}
                feature={feature}
                show={showMinimap}
                onSaveMarkerLocation={handleSaveMarkerLocation}
              />
            </div>
          </div>
        </div>

        {/* Form buttons */}
        {
          //showFormExpanded &&
        }
      </form>

      {/* Validation text */}
      {showValidationText && (
        <div id="validation-msg" className="mt24 txt-m txt-bold">
          Order successfully submitted.
        </div>
      )}
    </>
  );
}
