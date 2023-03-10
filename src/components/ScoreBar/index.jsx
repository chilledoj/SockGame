const ScoreBar = ({ current, max, team }) => {
  const barItems = Array.from(Array(max), (_, i) => ({ active: i < current }));
  return (
    <div>
      {barItems.map((bar, i) => (
        <span key={i}
          style={{
            display: "inline-block",
            minWidth: "1 rem",
            width: "1rem",
            height: "1 rem",
            backgroundColor: bar.active?`var(--color-${team})`:'white',
            border: "1px solid black"
          }}
        >
          &nbsp;
        </span> 
      ))}
    </div>
  );
};

export default ScoreBar;
