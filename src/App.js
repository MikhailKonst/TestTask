import "./App.css";
import { Comp2 } from "./Components/comp2";
import { Comp3 } from "./Components/comp3";
import { Comp4 } from "./Components/comp4";
import { Comp5 } from "./Components/comp5";
import { Comp6 } from "./Components/comp6";
import { initialState } from "./Components/utilita";
import { reducer } from "./Components/utilita";
import { useReducer } from "react";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(1);
  const [currencyFrom, setCurrencyFrom] = useState("USD");
  const [currencyTo, setCurrencyTo] = useState("RUB");
  function onSwap() {
    setCurrencyFrom(currencyTo);
    setCurrencyTo(currencyFrom);
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  function converting(from, to, amount) {
    fetch(
      `https://v6.exchangerate-api.com/v6/bbd07b77a1a3d2f543cbfbc4/latest/USD`
    )
      .then((response) => response.json())
      .then((data) => {
        const result = (
          (data.conversion_rates[from] / data.conversion_rates[to]) *
          amount
        ).toFixed(2);
        dispatch({ type: "RES", result });
        const historyList = {
          date: new Date().toLocaleString(),
          from,
          to,
          amount,
          result,
        };
        dispatch({ type: "HIST", historyList });
      })
      .catch(() => {
        dispatch({
          type: "ERR",
          error: "Ошибка получения данных!",
        });
      });
  }

  return (
    <div className="App">
      {state.error && <div className="error">{state.error}</div>}
      <h1 className="NameApp">Конвертер валют</h1>
      <Comp2
        currencyFrom={currencyFrom}
        setCurrencyFrom={setCurrencyFrom}
        amount={amount}
        setAmount={setAmount}
      />
      <div className="Buttons">
        <Comp3 onSwap={onSwap} />
        <Comp4
          converting={converting}
          currencyFrom={currencyFrom}
          currencyTo={currencyTo}
          amount={amount}
        />
      </div>
      <Comp5
        currencyTo={currencyTo}
        setCurrencyTo={setCurrencyTo}
        result={state.result}
      />
      <Comp6 historyList={state.historyList} />
    </div>
  );
}

export default App;
