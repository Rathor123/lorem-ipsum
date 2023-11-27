import React, { useState } from "react";
import data from "./data";
function App() {
  const [text, setText] = useState(0);
  const [para, setPara] = useState([]);
  const handaleclick = (e) => {
    e.preventDefault();
    let amount = parseInt(text);
    if (0 > amount) {
      setText(1);
    }
    if (amount > 8) {
      setText(8);
    }
    setPara(data.slice(0, amount));
  };
  return (
    <section>
      <form onSubmit={handaleclick}>
        <label htmlFor="number_value">
          <input
            type="number"
            onChange={(e) => setText(e.target.value)}
            id="number_value"
            value={text}
          />
        </label>
        <button type="submit">Genrate</button>
      </form>
      <article>
        {para.map((value, index) => {
          return <p key={index}>{value}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
