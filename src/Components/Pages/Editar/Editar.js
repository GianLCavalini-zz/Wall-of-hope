import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export function Editar(){
    const params = useParams();

    const navigate = useNavigate();

    const [edit, setEdit] = useState({
        img: "",
        Instituição: "",
        Descrição: "",
        Precisamos: "",
        Oferecemos: "",
        Endereço: "",
        Senha: "",
});
//  RESPONSE
    useEffect(() => {
        async function getEdit(){
            const response = await axios.get(`https://ironrest.herokuapp.com/helpinther/${params.id}`);
            setEdit({ ...response.data }) 
        };
        getEdit()
    
    }, [])
    console.log(edit)


// INPUTS
    function handleChange(e){
        setEdit({[e.target.name]: e.target.value});
        console.log(edit)

    }
    async function handleSubmit(e){
        e.preventDefault();

       await axios.put(`https://ironrest.herokuapp.com/helpinther/${params.id}`, edit)

        navigate("/");
    }

// FORM
    return(

<form onSubmit={handleSubmit}>
        <div> 

            <h1>Registre-se aqui:</h1>
            <input 
                name="img"
                type="text"
                placeholder="url da imagem"
                onChange={handleChange}
                value={edit.img}
            />
            
            <input
                name="Instituição" 
                type="text" 
                placeholder="Instituição"
                onChange={handleChange}
                value={edit.Instituição}
            />


            <input
                name="Descrição"  
                type="text"
                placeholder="Descrição" 
                onChange={handleChange}
                value={edit.Descrição}
            />

            <input 
                name="Precisamos" 
                type="text"
                placeholder="Precisamos de:" 
                onChange={handleChange}
                value={edit.Precisamos}
            />

            <input 
                name="Oferecemos" 
                type="text" 
                placeholder="Oferecemos:"
                onChange={handleChange}
                value={edit.Oferecemos}
            />

            <input
                name="Endereço" 
                type="text"
                placeholder="Endereço" 
                onChange={handleChange}
                value={edit.Endereço}
            /> 
            <input 
                name="Senha"
                type="text"
                placeholder="digite sua senha"
                onChange={handleChange}
                value={edit.Senha}
            />          
            <button type="submit" >Registrar</button>

        </div>
    </form>
    )
}
