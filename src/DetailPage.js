import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { updateGame, getGameById } from './services/fetch-utils';

export default function DetailPage() {
  const { id } = useParams();
  const history = useHistory();
  const [gameInForm, setGameInForm] = useState({
    id: 0,
    title: '',
    genre: '',
    designer: '',
    description: '',
    min_players: 2,
    max_players: 10
  });

  // on mount, fetch and set in state the correct board game for this id (the id can be found in match.params using the correct react-router hook)

  useEffect(() => {
    async function getGame() {
      const game = await getGameById(id);

      setGameInForm(game);
    }
    getGame();
  }, [id]);


  async function handleSubmit(e) {
    e.preventDefault();

    await updateGame(gameInForm);

    history.push('/board-games');
  }

  return (
    <div className='update'>
      <form onSubmit={handleSubmit}>
        <h2>Update Existing Board Game</h2>
        <label>
            Title
          <input required name='title' value={gameInForm.title} onChange={(e) => setGameInForm({ ...gameInForm, title: e.target.value })} />
        </label>
        <label>
            Genre
          <select required value={gameInForm.genre}
            onChange={(e) => setGameInForm({ ...gameInForm, genre: e.target.value })}
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
          <input required name='designer' value={gameInForm.designer} onChange={(e) => setGameInForm({ ...gameInForm, designer: e.target.value })}/>
        </label>
        <label>
            Min Players
          <input required name='min_players' value={gameInForm.min_players} onChange={(e) => setGameInForm({ ...gameInForm, min_players: e.target.value })}/>
        </label>
        <label>
            Max Players
          <input required name='max_players' value={gameInForm.max_players} onChange={(e) => setGameInForm({ ...gameInForm, max_players: e.target.value })}/>
        </label>
        <label>
            Description
          <textarea required name='description' value={gameInForm.description} onChange={(e) => setGameInForm({ ...gameInForm, description: e.target.value })} />
        </label>
        <button>Update Game</button>
      </form>
    </div>
  );
}
