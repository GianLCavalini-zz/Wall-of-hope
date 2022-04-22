import { Link } from "react-router-dom";
import {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import "./NavBar.css"

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
        <nav class="NavBar"> 
        <h1 className="title">Help.Inder</h1>
                <div className="nav">
                <form  class="d-flex" onSubmit={handleSubmit}>
                    <input 
                    className="input"
                    name="digite"
                    type="password"
                    placeholder="sua senha"
                    onChange={handleChange}
                    value={senha}
                    />
                <button class="btn btn-outline-success" type="submit" style={{height: "30px", marginRight: "45px"}}> Log-in </button>
                <Link to="/Register"><button class="btn btn-outline-success" type="submit" style={{height: "30px"}}>Cadastre-se</button></Link>
                </form>
                </div>
        </nav>
     );
}

