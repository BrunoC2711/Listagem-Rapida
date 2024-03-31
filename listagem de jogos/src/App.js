import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Genero from './components/Genero';
import Rodape from './components/Rodape';
import games_json from './components/games_carga_inicial.json';

function App() {

  const generos = [
      {
          nome: 'RPG',
          corPrimaria: '#82CFFA',
          corSecundaria: '#E8F8FF',
      },
      {
          nome: 'Mundo Aberto',
          corPrimaria: '#E06B69',
          corSecundaria: '#FDE7E8',
      },
      {
          nome: 'Soulslike',
          corPrimaria: '#D86EBF',
          corSecundaria: '#FAE5F5',
      },
      {
          nome: 'Battle Royale',
          corPrimaria: '#FEBA05',
          corSecundaria: '#FFF5D9',
      },
      {
          nome: 'FPS',
          corPrimaria: '#FF8A29',
          corSecundaria: '#FFEEDF',
      },
      {
        nome: 'Corrida',
        corPrimaria: '#A6D157',
        corSecundaria: '#F0F8E2',
      },
  ]

  const [games, setGames] = useState(games_json.games)

  const aoNovoGameAdicionado = (game) => {
    setGames([...games, game])
  }
  return (
    <div className='App'>
      <Banner />
      <Formulario generos={generos.map(gen => gen.nome)} aoGameCadastrado={aoNovoGameAdicionado}/>
      {generos.map(gen  => 
        <Genero 
          key={gen.nome}
          nome={gen.nome}
          corPrimaria={gen.corPrimaria}
          corSecundaria={gen.corSecundaria}
          games={games.filter(game => game.genero === gen.nome)}
        />
      )}
      <Rodape />
    </div>
  );
}

export default App;
