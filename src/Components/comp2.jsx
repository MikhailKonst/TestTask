import { useState } from "react";
import { useEffect } from "react";

export function Comp2({ currencyFrom, setCurrencyFrom, amount, setAmount }) {
  const [codeValute1, setCodeValute1] = useState([]);

  useEffect(() => {
    fetch(
      "https://v6.exchangerate-api.com/v6/bbd07b77a1a3d2f543cbfbc4/latest/USD"
    )
      .then((response) => response.json())
      .then((data) => setCodeValute1(Object.keys(data.conversion_rates)));
  }, []);
  return (
    <div className="Comp2">
      <div className="input-container">
        <input
          placeholder="Введите число"
          className="input-field"
          id="input"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <label for="input-field" className="input-label">
          Из
        </label>
        <span className="input-highlight"></span>
      </div>

      <div className="selectOne">
        <select
          className="Select"
          value={currencyFrom}
          onChange={(e) => setCurrencyFrom(e.target.value)}
        >
          {codeValute1.map((code, index) => (
            <option key={index} value={code}>
              {code}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
