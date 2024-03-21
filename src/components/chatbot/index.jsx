import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";


const theme = {
  background: "#e9e9e9",
  fontFamily: "Roboto",
  headerBgColor: "#00233a",
  headerFontColor: "#fff",
  headerFontSize: "14px",
  botBubbleColor: "#ed6607",
  botFontColor: "#fff",
  userBubbleColor: "#002339",
  userFontColor: "#fff",
};

const ChatBotHelper = () => {
  const steps = [
      {
        id: "1",
        message: "Bonjour, je suis le chatbot Foncier ! Je peux vous renseigner sur l'entreprise et nos solutions...",
        trigger: "2"
      },
      {
        id: "2",
        message: "Êtes-vous particulier ou investisseur?",
        trigger: "3"
      },
      {
        id: '3',
        options: [
          { value: 1, label: 'Particulier', trigger: '31' },
          { value: 2, label: 'Investisseur', trigger: '32' },
        ],
      },
      {
        id: "31",
        message: "particulier ?",
        end: true,
      },
      {
        id: "32",
        message: "investisseur ?",
        end: true,
      },
      
  ];

  return (
    <>
      <ThemeProvider theme={theme}>
        <ChatBot
         headerTitle="Foncier CHAT On Ligne"
         steps={steps}
         floating={true}
        />
      </ThemeProvider>
    </>
  );
};

export default ChatBotHelper;
