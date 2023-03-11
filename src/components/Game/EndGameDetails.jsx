const EndGameDetails = ({game, exitGame}) => {

  const exitGameplay = (e) => {
    e.preventDefault();
    exitGame();
  };


  return (
    <div className="row is-center">
      <div className="col-6">
        <div className="card">
          <header className="is-center"><h2 style={{ color: game.winners }}>{game.winners==="blue"?"Blue":"Red"} team are the winners</h2></header>
          <div>
            <div className="is-center">
              <p style={{fontWeight: '900', fontSize: "4rem"}}>
                <span>{game[game.winners]}</span>
                <span>&nbsp; - &nbsp;</span>
                <span>{game.winners === "blue" ? game.red : game.blue}</span>
              </p>
            </div>
            
            <div style={{display:"flex", flexDirection: "row", flexWrap:"wrap"}}>
              {game.history.map((h, i) => (
                <div key={i} className="card">
                  <div>
                    <span
                    style={{
                      display: "inline-block",
                      minWidth: "1 rem",
                      width: "1rem",
                      height: "1 rem",
                      backgroundColor: h.team
                    }}
                  >
                    &nbsp;
                  </span>{" "}
                  {h.item.txt}
                  </div>
                  {h.item.icon?h.item.icon.cmp:null}
                </div>
              ))}
            </div>

            <div className="is-right">
              <button onClick={exitGameplay} className="button primary">Reset</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EndGameDetails;