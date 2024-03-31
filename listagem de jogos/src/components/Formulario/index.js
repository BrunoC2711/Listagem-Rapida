import { useState } from "react"
import Botao from "../Botao"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import './Formulario.css'

const Formulario = ({ generos, aoGameCadastrado}) => {

    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [imagem, setImagem] = useState('')
    const [genero, setGenero] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault();
        aoGameCadastrado({
            nome, 
            descricao,
            imagem,
            genero
        })
        limparFormulario();
    }

    function limparFormulario() {
        setNome('')
        setDescricao('')
        setImagem('')
        setGenero('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para adicionar um novo Game</h2>
                <CampoTexto 
                    obrigatorio
                    type="text"
                    label="Nome"
                    placeholder="Digite o Nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    type="text"
                    label="Descricao"
                    placeholder="Digite uma Descricao"
                    valor={descricao}
                    aoAlterado={valor => setDescricao(valor)}
                />
                <CampoTexto
                    obrigatorio
                    type="text"
                    label="Imagem"
                    placeholder="Insira um endereço de Imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio
                    label="Gênero"
                    itens={generos}
                    valor={genero}
                    aoAlterado={valor => setGenero(valor)}
                />
                <Botao>
                    Adicionar
                </Botao>
            </form>
        </section>
    )
}
export default Formulario