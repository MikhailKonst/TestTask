import { useState } from "react";
import { useEffect } from "react";

export function Comp5({ currencyTo, setCurrencyTo, result }) {
  const [codeValute2, setCodeValute2] = useState([]);

  useEffect(() => {
    fetch(
      "https://v6.exchangerate-api.com/v6/bbd07b77a1a3d2f543cbfbc4/latest/USD"
    )
      .then((response) => response.json())
      .then((data) => setCodeValute2(Object.keys(data.conversion_rates)));
  }, []);
  return (
    <div className="Comp5">
      <div className="input-container2">
        <input
          className="input-field2"
          id="input2"
          type="number"
          readOnly
          value={result}
        />
        <label for="input-field2" className="input-label2">
          В
        </label>
        <span className="input-highlight2"></span>
      </div>

      <div className="selectTwo">
        <select
          className="Select2"
          value={currencyTo}
          onChange={(e) => setCurrencyTo(e.target.value)}
        >
          {codeValute2.map((code, index) => (
            <option key={index} value={code}>
              {code}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
