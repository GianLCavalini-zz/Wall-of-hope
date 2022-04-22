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
        Contato: "",
        Endereço: "",
        Senha: "",

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
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}> 

            <h1>Registre-se aqui:</h1>
            <div class="col-sm-7">
                <label for="exampleInputEmail1" class="form-label">Nome da sua instituição</label>
                <input
                    class="form-control"
                    name="Instituição" 
                    type="text" 
                    placeholder="Instituição"
                    onChange={handleChange}
                    value={register.Instituição}
                />
            </div>
            
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Sua foto</label>    
                <input 
                    class="form-control"
                    name="img"
                    type="text"
                    placeholder="url da imagem"
                    onChange={handleChange}
                    value={register.img1}
                />
           
            </div>

            <div class="mb-3">
                <label for="exampleInputEmail1" class="col-sm-7">Informações</label>
                <input
                    class="form-control"
                    name="Descrição"  
                    type="text"
                    placeholder="Descrição" 
                    onChange={handleChange}
                    value={register.Descrição}
                />

                <input 
                    class="form-control"
                    name="Precisamos" 
                    type="text"
                    placeholder="Precisamos de:" 
                    onChange={handleChange}
                    value={register.Precisamos}
                />

                <input 
                    class="form-control"
                    name="Contato" 
                    type="text" 
                    placeholder="Contato"
                    onChange={handleChange}
                    value={register.Contato}
                />

                <input
                    class="form-control"
                    name="Endereço" 
                    type="text"
                    placeholder="Endereço" 
                    onChange={handleChange}
                    value={register.Endereço}
                /> 
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Escolha sua senha</label>
                <input 
                    class="form-control"
                    name="Senha"
                    type="text"
                    placeholder="digite sua senha"
                    onChange={handleChange}
                    value={register.Senha}
                />          
            <button class="btn btn-primary" type="submit" >Registrar</button>
            </div>

        </div>
    </form>
    )
}