import React from "react";
import "./App.css";
import { useState } from "react";

export default function App() { const [reverseS, setReverseS] = useState("");
  const [error, setError] = useState("");
  let valuer = " ";

  const handleChange = (e) => { valuer = e.target.value ; 
    if (value.length <= 9 ) { let valuerReversed = value.split("").reverse().join("");
      setReverseS(valuerReversed );
    }
    else 
    {
      setError("Erreur, on n'acceptons pas plus que 9 caractéres.")
    }
    
  };

  return (
    <div className="App">
      <h1> 'Inverseur d'une phrase' </h1>
      <div className="reverse">
        <label className="reservedString">{reverseStr}</label>
      </div>
      <br />
      <form className="String">
        <input className="input" onChange={handleChange} />
      </form>
      <br />
      <div className="error">{error}</div>
      
    </div>
  );
}

