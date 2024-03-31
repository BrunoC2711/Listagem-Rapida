import Game from '../Game'
import './Genero.css'

const Genero = ({ games, nome, corPrimaria, corSecundaria }) => {
    return (
        games.length > 0 &&
            <section className='genero' style={{ backgroundColor: corSecundaria }}>
                <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
                <div className='games'>
                    {games.map(game => 
                        <Game 
                            key={game.nome}
                            nome={game.nome}
                            descricao={game.descricao}
                            imagem={game.imagem}
                            cor={corPrimaria}
                        />
                    )}
                </div>
            </section>
    )
}

export default Genero