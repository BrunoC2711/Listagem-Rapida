import './Game.css';

const Game = ({ nome, imagem, descricao, cor}) => {
    return (
        <div className='game'>
            <div className='cabecalho' style={{ backgroundColor: cor}}>
                <img src={imagem} alt={nome}></img>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{descricao}</h5>
            </div>
        </div>
    )
}

export default Game