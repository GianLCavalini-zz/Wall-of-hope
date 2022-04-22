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

            <div className="card mb-3">
            <img src={inst.img} className="d-block w-100"  alt={inst.Instituição} style={{maxHeight: "200px"}}/>      
            <div class="card-body">
                <h5 class="card-title" >{inst.Instituição}</h5>
                <p class="card-text" >{inst.Descrição}</p>
                <div className="flexBtns">
                    <button className="deslikeBtn">X</button>
                    <Link to={`/instituicao/${inst._id}`} target="_blank"><button className="infoBtn">i</button></Link>
                    <button  onClick={clickHandlerFavorites} className="likeBtn">{"<3"}</button>
                </div>
            </div>
            </div>

        </div>
     );
}

