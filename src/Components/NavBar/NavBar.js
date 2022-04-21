import { Link } from "react-router-dom";

export function NavBar() {
    return ( 
        <nav className="NavBar">
                <Link to="/Register"><button><p>Cadastre-se</p></button></Link>
                <p>Edite seu cadastro</p>
        </nav>
     );
}
