export function Comp6({ historyList }) {
  return (
    <div className="Comp6">
      <div className="NameHistory">История операций</div>
      <ul>
        {historyList.map((history, index) => (
          <li key={index}>
            {history.date} - {history.to} {history.amount} → {history.from}
            {history.result}
          </li>
        ))}
      </ul>
    </div>
  );
}
