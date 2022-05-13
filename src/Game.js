import react from 'react';
import { Link } from 'react-router-dom';
export default class Game extends react.Component {
  render() {
    const { game } = this.props;
    
    return (
      // be sure this component is wrapped in a react-router link that takes the user to the correct detail page
      <Link className='game' to={`/board-games/${game.id}`}>
        <h3>{game.title}</h3>
        <p>A {game.genre} game by designer {game.designer}</p>
        <p>for {game.min_players} - {game.max_players} players</p>
      </Link>
    );
  }
}
