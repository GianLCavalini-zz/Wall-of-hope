import axios from "axios"
import { useEffect, useState } from "react"

export function Favoritos(){
    const[favorites, setFavorites] = useState([]);
    //let instituicaoOnScreen = [];

    

    useEffect(() => {
         async function fetchFavorites() {
            const response = await axios.get('https://ironrest.herokuapp.com/helpintherFav');
           
            setFavorites(response.data)
          
        };
        fetchFavorites()
    },[])
    console.log(favorites)

    async function handleDelete(){
        await axios.delete('https://ironrest.herokuapp.com/helpintherFav', [favorites.instituição])
    }

    return(
        <div>
            <h1>Instituições Favoritas</h1>
            <ul>
                {favorites.map((currentInst) => {
                    
                       console.log(currentInst)
                        return(
                            <li key={currentInst._id}>
                                {currentInst.instituição}
                                <button onClick={handleDelete}>X</button>
                            </li>
                        )
                })}
            </ul>


        </div>)

}