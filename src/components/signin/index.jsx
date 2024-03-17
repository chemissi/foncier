import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/review/google.png";
import img2 from "../../assets/images/review/tweet.png";

function SignIn() {
  const [showPass, setShowPass] = useState(false);

  return (
    <section className="account-section">
      <div className="tf-container">
        <div className="row">
          <div className="wd-form-login">
            <h4>Connectez-vous</h4>
            <div className="nofi-form">
              <p>
                Username: <span>Ghassen</span>
              </p>
              <p>
                Password: <span>Test</span>
              </p>
            </div>
            <form action="/">
              <div className="ip">
                <label>
                  Email<span>*</span>
                </label>
                <input
                  type="text"
                  defaultValue="Ghassen"
                  placeholder="Name"
                />
              </div>
              <div className="ip">
                <label>
                 Mot de passe<span>*</span>
                </label>
                <div className="inputs-group auth-pass-inputgroup">
                  <input
                    type={showPass ? "text" : "password"}
                    className="input-form password-input"
                    placeholder="Password"
                    id="password-input"
                    required
                  />
                  <Link
                    className={`password-addon ${
                      showPass ? "icon-eye" : "icon-eye-off"
                    }`}
                    id="password-addon"
                    onClick={() => setShowPass(!showPass)}
                  />
                </div>
              </div>
              <div className="group-ant-choice">
                <div className="sub-ip">
                  <input type="checkbox" />
                  Rester connecté
                </div>
                <Link to="#" className="forgot">
                  J’ai oublié mon mot de passe
                </Link>
              </div>
              
              <button type="submit">Login</button>
              <div className="sign-up">
              Vous n’avez pas encore de compte ? <Link to="/createaccount">Inscrivez-vous</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
