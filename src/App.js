import React from "react";
import "./styles.css";
import Api from "./componets/Api";

export default function App() {
  return (
    <div className="App">
      <header className="header">
        Sagi.<span>Website</span>
      </header>
      <Api />
    </div>
  );
}
