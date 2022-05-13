import React from 'react';
import { createGame } from './services/fetch-utils';

export default class CreatePage extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      genre: '',
      designer: '',
      description: '',
      min_players: 2,
      max_players: 10
    };
  }


  async handleSubmit(e) {
    e.preventDefault();

    await createGame(this.state);

    this.props.history.push('/board-games');
  }

  render() {

    return (
      <div className='create'>
        {/* on submit, call your handleSubmit function */}
        <form onSubmit={this.handleSubmit}>
          <h2>Add board game</h2>
          <label>
              Title
            {/* on change, set the title in state */}
            <input required name='title' onChange={(e) => this.setState({ title: e.target.value })} />
          </label>
          <label>
              Genre
            {/* on change, set the genre in state */}
            <select required
              onChange={(e) => this.setState({ genre: e.target.value })}
            >
              <option>Tile-laying</option>
              <option>Economic</option>
              <option>War</option>
              <option>Card</option>
              <option>Abstract</option>
              <option>Cooperative</option>
              <option>Solo</option>
            </select>
          </label>
          <label>
              Designer
            {/* on change, set the designer in state */}
            <input required name='designer' onChange={(e) => this.setState({ designer: e.target.value })}/>
          </label>
          <label>
              Min Players
            {/* on change, set the min players in state */}
            <input required name='min_players' onChange={(e) => this.setState({ min_players: e.target.value })}/>
          </label>
          <label>
              Max Players
            {/* on change, set the max players in state */}
            <input required name='max_players' onChange={(e) => this.setState({ max_players: e.target.value })}/>
          </label>
          <label>
              Description
            {/* on change, set the description in state */}
            <textarea required name='description' onChange={(e) => this.setState({ description: e.target.value })} />
          </label>
          <button>Create game</button>
        </form>
      </div>
    );
  }
}
