
const Header = ({game, exitButton}) => {
  return (
    <header>
        <nav className="nav">
          <div className="nav-left">
            <a className="brand" href="#">Sock Game</a>
          </div>
          {game &&
            <>
            <div className="nav-center">
              <a>{game.id}</a>
            </div>
            <div className="nav-right">
              <a><span className="tag">{game.gameType}</span></a>
              {exitButton?exitButton:null}
            </div>
            </>
          }
          
        </nav>
      </header>
  )
}

export default Header