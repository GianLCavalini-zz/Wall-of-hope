import { useState, useEffect } from "react";
import axios from "axios";
import "./card.css"
import { Link } from "react-router-dom";

export function Card() {
    const [inst, setInst] = useState([])
    const [fav, setFav] = useState([])
    const [favoritado, setFavoritado] = useState(false)
    
    useEffect(()=>{
        async function getInst(){
            const response = await axios.get(
                "https://ironrest.herokuapp.com/helpinther",
            );
            setInst(response.data[Math.floor(Math.random() * response.data.length)])
        }
        getInst()
        
    }, [favoritado]);

 
    console.log(inst.Instituição)


    useEffect(() => {

        async function getfav() {
            const response = await axios.get('https://ironrest.herokuapp.com/helpintherFav')
            setFav(response.data)
            
  }
        getfav()
       
    },[]) 
    console.log(fav) 
  
    function clickHandlerFavorites(e) {
        e.preventDefault();
        for(let i=0;i<fav.length; i++){console.log(fav[i].instituição)
        if (fav[i].instituição===inst.Instituição){
            console.log("foi")
            return;
        }}
        axios.post('https://ironrest.herokuapp.com/helpintherFav', {
            instituição: inst.Instituição
            })
        console.log("foi postado")
        setFavoritado(!favoritado)}

        
    
    return ( 

        <div className="Card">
            <img  src={inst.img} alt={inst.Instituição} style={{maxWidth: "300px", minWidth: "300px", borderRadius: "5%"}} />
            <h1>{inst.Instituição}</h1>
            <p>{inst.Descrição}</p>
            <Link to={`/instituicao/${inst._id}`} target="_blank"><button>i</button></Link>
            <button onClick={clickHandlerFavorites}>{"<3"}</button>
            <button>X</button>
        </div>
     );
}

