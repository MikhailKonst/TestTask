export function Comp4({ converting, currencyTo, currencyFrom, amount }) {
  return (
    <div className="Comp4">
      <button
        className="ThemeButton"
        onClick={() => converting(currencyTo, currencyFrom, amount)}
      >
        <div className="NameButton">Конвертировать</div>
      </button>
    </div>
  );
}
