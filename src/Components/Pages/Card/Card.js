import { useState, useEffect } from "react";
import axios from "axios";
import "./card.css"
import {Link} from "react-router-dom"

export function Card() {
    const [inst, setInst] = useState([])
    
    useEffect(()=>{
        async function getInst(){
            const response = await axios.get(
                "https://ironrest.herokuapp.com/helpinther",
            );
            setInst(response.data[Math.floor(Math.random() * response.data.length)])
        }
        getInst()
        
    }, []);
    console.log(inst)
    return ( 

        <div className="Card">
            <img  src={inst.img} alt={inst.Instituição} style={{maxWidth: "300px", minWidth: "300px", borderRadius: "5%"}} />
            <h1>{inst.Instituição}</h1>
            <p>{inst.Descrição}</p>
            <Link to={`/instituicao/${inst._id}`}><button>Saber mais</button></Link>
            <button>V</button>
            <button>X</button>

        </div>
     );
}

