const Login = () =>{
    return (
        <div className="container">
            <div className="registro">
            <form action="">
                <label htmlFor="email">Usuario:</label>
                <input type="email" id="email" placeholder="Ingrese su email" />
                <label htmlFor="password">Contraseña:</label>
                <input type="password" id="password" placeholder="Ingrese su contraseña" />
                <button className="bot">Ingresar</button>
            </form>
            </div>
        </div>
    )
}

export default Login;