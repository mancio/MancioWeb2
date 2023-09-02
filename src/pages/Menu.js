import {getEmoji} from "../logic/Functions";
import '../App.css';
import { useNavigate } from 'react-router-dom';
import {DASHBOARD, RECIPES} from "../logic/Names";
import BetterButton from "../components/BetterButton";
import IpPlaceTime from "../components/IpPlaceTime";

function Menu(){

    const navigate = useNavigate();

    return(
        <div>
            <div className="title">
                <p> {getEmoji()} Mancio Page {getEmoji()}</p>
            </div>
            <BetterButton text="Recipes" click={()=>navigate(RECIPES)}/>
            <BetterButton text="Dashboard" click={()=>navigate(DASHBOARD)}/>
            <IpPlaceTime/>
        </div>
    );
}

export default Menu;