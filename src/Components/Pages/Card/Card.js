import { useState, useEffect } from "react";
import axios from "axios";
import "./card.css"

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
            <img  src={inst.img} alt={inst.Instituição} style={{maxWidth: "270px", minWidth: "270px", borderRadius: "5%"}} />
            <h1>{inst.Instituição}</h1>
            <p>{inst.Descrição}</p>
        </div>
     );
}

