import { useState, useEffect } from "react";
import axios from "axios";
import "./card.css"
import { Link } from "react-router-dom";

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

    useEffect(()=>{
        async function getInst(){
            const response = await axios.get(
                `https://ironrest.herokuapp.com/helpinther/`,
            );
            setInst(response.data[Math.floor(Math.random() * response.data.length)])
        }
        getInst()
        
    }, []);
    console.log(inst)
    return ( 

        <div className="Card">
            <div className="card mb-3">
            <img src={inst.img} className="d-block w-100"  alt={inst.Instituição} style={{maxHeight: "200px"}}/>      
            <div class="card-body">
                <h5 class="card-title" >{inst.Instituição}</h5>
                <p class="card-text" >{inst.Descrição}</p>
                <div className="flexBtns">
                    <button className="deslikeBtn">X</button>
                    <Link to={`/instituicao/${inst._id}`} target="_blank"><button className="infoBtn">i</button></Link>
                    <button className="likeBtn">{"<3"}</button>
                </div>
            </div>
            </div>
        </div>
     );
}

