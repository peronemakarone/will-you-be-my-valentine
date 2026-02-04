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
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", fontFamily: "sans-serif", textAlign: "center", padding: "20px" }}>
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" alt="bear-kiss" />
          <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>TOOOO! Znao sam(Nisi Mleko u kesi)! ❤️<br/>Vidimo se 14-og! ;)</h1>
        </>
      ) : (
        <>
          <img
            style={{ height: "200px" }}
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            alt="cute-bear"
          />
          <h1 style={{ fontSize: "2rem", margin: "20px 0" }}>Hoćeš li biti moja Valentine? 🌹</h1>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button
              style={{ fontSize: `${yesButtonSize}px`, backgroundColor: "#22c55e", color: "white", border: "none", padding: "10px 20px", borderRadius: "5px", cursor: "pointer", fontWeight: "bold" }}
              onClick={() => setYesPressed(true)}
            >
              DA
            </button>
            <button
              onClick={handleNoClick}
              style={{ backgroundColor: "#ef4444", color: "white", border: "none", padding: "10px 20px", borderRadius: "5px", cursor: "pointer", fontWeight: "bold" }}
            >
              {noCount === 0 ? "Ne" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
