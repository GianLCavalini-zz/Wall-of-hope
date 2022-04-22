import { Link } from "react-router-dom";
import { Params } from "react-router-dom";
import {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export function NavBar() {
    const navigate = useNavigate()
    const [senha, setSenha] = useState("")
    const [login, setLogin] = useState([])

    function handleChange(e){
        setSenha(e.target.value);
        console.log(senha)

    }
    useEffect(()=>{
        async function getSenha(){
            const response = await axios.get(`https://ironrest.herokuapp.com/findOne/helpinther?Senha=${senha}`);
            setLogin(response.data)
        }
        getSenha()
    },[senha])
    console.log(login)
    function handleSubmit(e){
        e.preventDefault()
        navigate(`/editar-cadastro/${login._id}`)

    }
    return ( 
        <nav className="NavBar">
                <Link to="/Register"><button><p>Cadastre-se</p></button></Link>
                <form onSubmit={handleSubmit}>
                    <input 
                    name="digite"
                    type="text"
                    placeholder="url da imagem"
                    onChange={handleChange}
                    value={senha}
                    />
                <button type="submit"> confirmar </button>
                </form>
        </nav>
     );
}

