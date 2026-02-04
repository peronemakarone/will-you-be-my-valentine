import { useState } from "react";

export default function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const phrases = [
    "Ne",
    "Jesi li sigurna? 🤨",
    "Razmisli još jednom...",
    "MLEKO SI U KESI",
    "UA",
    "BUDJAVO",
    "Srce mi puca... :*(",
    "Evo umirem",
    "Gotovo, mrtav sam",
    "Sada pričaš sa mojim duhom 👻",
    "Daj nemoj biti takva",
    ":((((",
    "KLIKNI DA MOLIM TE",
    "Nemaš izbora sad već",
    "No :(",
  ];

  const getNoButtonText = () => phrases[Math.min(noCount, phrases.length - 1)];

  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center", 
      height: "100vh", 
      margin: 0,
      fontFamily: "Arial, sans-serif", 
      textAlign: "center", 
      backgroundColor: "#fff5f5" 
    }}>
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" alt="Srećni medvedići" />
          <h1 style={{ fontSize: "2.5rem", color: "#e11d48", marginTop: "20px" }}>
            TOOOO! Znao sam! (Nisi Mleko u kesi) ❤️<br/>Vidimo se 14-og! ;)
          </h1>
        </>
      ) : (
        <>
          <img
            style={{ height: "200px", borderRadius: "10px" }}
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            alt="Medvedić sa ružama"
          />
          <h1 style={{ fontSize: "2.2rem", color: "#e11d48", margin: "25px 0" }}>
            Hoćeš li biti moja Valentine? 🌹
          </h1>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "15px", flexWrap: "wrap" }}>
            <button
              style={{ 
                fontSize: `${yesButtonSize}px`, 
                backgroundColor: "#22c55e", 
                color: "white", 
                border: "none", 
                padding: "12px 24px", 
                borderRadius: "8px", 
                cursor: "pointer", 
                fontWeight: "bold",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
              }}
              onClick={() => setYesPressed(true)}
            >
              DA
            </button>
            <button
              onClick={handleNoClick}
              style={{ 
                backgroundColor: "#ef4444", 
                color: "white", 
                border: "none", 
                padding: "12px 24px", 
                borderRadius: "8px", 
                cursor: "pointer", 
                fontWeight: "bold",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
              }}
            >
              {noCount === 0 ? "Ne" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
