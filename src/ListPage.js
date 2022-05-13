import React from 'react';
import { getGames } from './services/fetch-utils';
import Game from './Game';
export default class ListPage extends React.Component {
  constructor() {
    super();
    this.state = {
      games: []
    };
  }

  async componentDidMount() {
    const gameInfo = await getGames();

    this.setState({ games: gameInfo });
  }

  render() {
    return (
      <div className='list games'>
        {/* map through the games in state and render Game components */}
        {this.state.games.map((game, i) => 
          <Game 
            key={game + i}
            game={game}
          />
        )}
      </div>
    );
  }
}
