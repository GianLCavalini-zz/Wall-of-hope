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
        <>

        </>
     );
}
