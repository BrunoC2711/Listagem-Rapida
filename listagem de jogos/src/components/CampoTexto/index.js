import './CampoTexto.css';

const CampoTexto = ({ obrigatorio, type, label, placeholder, valor, aoAlterado }) => {
    
   
    const aoDigitar = (evento) => {
        aoAlterado(evento.target.value)
    }
    return (
        <div className="campo-texto">
            <label>{label}</label>
            <input 
                value={valor}
                onChange={aoDigitar}
                required={obrigatorio}
                type={type}
                placeholder={placeholder}
            />
        </div>
    )
}
export default CampoTexto