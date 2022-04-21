import { NavBar } from "../../NavBar/NavBar";
import { Card } from "../Card/Card";
import "./home.css"

export function Home() {
    return ( 
        <div className="home-background">
            <div className="NavBar">
                <NavBar />   
            </div>
            <div className="Home">
                <div className= "cardHome">      
                <Card/>
                </div>
            </div>
        </div>
     );
}

