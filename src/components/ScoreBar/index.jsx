const ScoreBar = ({ current, max }) => {
  const barItems = Array.from(Array(max), (_, i) => ({ active: i < current }));
  return (
    <div>
      {barItems.map((bar, i) => (
        <span key={i}>{bar.active ? "W" : " - "}</span>
      ))}
    </div>
  );
};

export default ScoreBar;
