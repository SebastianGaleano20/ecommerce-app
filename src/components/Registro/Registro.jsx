import './Registro.css'

const Registro = () => {
    return (
        <div className="container">
        <h1>Registrate a XP</h1>
        <div className="registro">
        <form  action="">
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" placeholder="ingrese su nombre" />
            <label htmlFor="apellido">Apellido:</label>
            <input type="text" id="apellido" placeholder="ingrese su apellido" />
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" placeholder="ingres su email"/>
            <label htmlFor="contraseña">Contraseña:</label>
            <input type="password" id="contraseña" placeholder="ingrese su contraseña" />
            <button className='bot'>Enviar solicitud</button>
        </form>
        </div>
        </div>
    )
}
export default Registro;