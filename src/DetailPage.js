import React from 'react';
import { updateGame, getGameById } from './services/fetch-utils';

export default class DetailPage extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      title: '',
      genre: '',
      designer: '',
      description: '',
      min_players: 2,
      max_players: 10
    };
  }

  async componentDidMount() {
    const game = await getGameById(this.props.match.params.id);

    this.setState({ ...game });
  }

  async handleSubmit(e) {
    e.preventDefault();

    await updateGame(this.state);

    this.props.history.push('/board-games');
  }

  render() {
    const {
      title,
      genre,
      designer,
      description,
      min_players,
      max_players
    } = this.state;

    return (
      <div className='update'>
        <form onSubmit={this.handleSubmit}>
          <h2>Update Existing Board Game</h2>
          <label>
              Title
            <input required name='title' value={title} onChange={(e) => this.setState({ title: e.target.value })} />
          </label>
          <label>
              Genre
            <select required value={genre}
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
            <input required name='designer' value={designer} onChange={(e) => this.setState({ designer: e.target.value })}/>
          </label>
          <label>
              Min Players
            <input required name='min_players' value={min_players} onChange={(e) => this.setState({ min_players: e.target.value })}/>
          </label>
          <label>
              Max Players
            <input required name='max_players' value={max_players} onChange={(e) => this.setState({ max_players: e.target.value })}/>
          </label>
          <label>
              Description
            <textarea required name='description' value={description} onChange={(e) => this.setState({ description: e.target.value })} />
          </label>
          <button>Update Game</button>
        </form>
      </div>
    );
  }
}
