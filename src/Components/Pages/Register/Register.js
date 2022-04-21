import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react"

export function Register(){
    const navigate = useNavigate();
    const [register, setRegister] = useState({

        img: "",
        Instituição: "",
        Descrição: "",
        Precisamos: "",
        Oferecemos: "",
        Endereço: "",
        Senha: "",
        img:"",

});
    function handleChange(e){
        setRegister({...register, [e.target.name]: e.target.value});
        console.log(register)

    }
    async function handleSubmit(e){
        e.preventDefault();

       await axios.post("https://ironrest.herokuapp.com/helpinther", register)

        navigate("/");
    }

    return(

<form onSubmit={handleSubmit}>
        <div> 

            <h1>Registre-se aqui:</h1>

            <input 
                name="img"
                type="text"
                placeholder="url da imagem"


            <input
                name="img"
                type="text"
                placeholder="Cole a URL da sua imagem aqui"
                onChange={handleChange}
                value={register.img}
            />
            
            <input
                name="Instituição" 
                type="text" 
                placeholder="Instituição"
                onChange={handleChange}
                value={register.Instituição}
            />


            <input
                name="Descrição"  
                type="text"
                placeholder="Descrição" 
                onChange={handleChange}
                value={register.Descrição}
            />

            <input 
                name="Precisamos" 
                type="text"
                placeholder="Precisamos de:" 
                onChange={handleChange}
                value={register.Precisamos}
            />

            <input 
                name="Oferecemos" 
                type="text" 
                placeholder="Oferecemos:"
                onChange={handleChange}
                value={register.Oferecemos}
            />

            <input
                name="Endereço" 
                type="text"
                placeholder="Endereço" 
                onChange={handleChange}
                value={register.Endereço}
            /> 
            <input 
                name="Senha"
                type="text"
                placeholder="digite sua senha"
                onChange={handleChange}
                value={register.Senha}
            />          
            <button type="submit" >Registrar</button>

        </div>
    </form>
    )
}