const ScoreBar = ({ current, max, team }) => {
  const barItems = Array.from(Array(max), (_, i) => ({ active: i < current }));
  return (
    <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'stretch'}}>
      {barItems.map((bar, i) => (
        <div key={i}
          style={{
            minWidth: "1 rem",
            flexGrow: 1,
            //width: "1rem",
            height: "1 rem",
            backgroundColor: bar.active?`var(--color-${team})`:'white',
            border: "1px solid black"
          }}
        >
          &nbsp;
        </div> 
      ))}
    </div>
  );
};

export default ScoreBar;
