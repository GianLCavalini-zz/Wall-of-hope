import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


export function Instituição() {
    const params = useParams()
    const [inst, setInst] = useState([])
    useEffect(() =>{
        async function getInst(){
            const response = await axios.get(`https://ironrest.herokuapp.com/helpinther/${params.id}`);
            setInst(response.data) 
        };
        getInst()
    
    }, [])
    console.log(inst)

    return ( 
        <div class="card mb-3">
        <img src={inst.img} class="card-img-top" alt={inst.Instituição}/>
        <div class="card-body">
            <h2 class="card-title">{inst.Instituição}</h2>
            <h5 class="card-text">{inst.Descrição}</h5>
            <li>Endereço: {inst.Endereço};</li>
            <li>Numero para contato: {inst.Contato}</li>
            <li>Precisamos de: {inst.Precisamos}</li>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
        </div>
     ); 
}
