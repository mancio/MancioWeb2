import {getEmoji} from "../logic/Functions";
import '../App.css';
import { useNavigate } from 'react-router-dom';
import {DASHBOARD, DICE, KITCHEN_TOOLS, RECIPES, SCORE_COUNTER} from "../logic/Names";
import ArcadeButton from "../components/ArcadeButton";

function Menu(){

    const navigate = useNavigate();

    return(
        <div>
            <div className="title">
                <p> {getEmoji()} Mancio Page {getEmoji()}</p>
            </div>
            <ArcadeButton text="Recipes" click={()=>navigate(RECIPES)}/>
            <ArcadeButton text="Dashboard" click={()=>navigate(DASHBOARD)}/>
            <ArcadeButton text="Score Counter" click={()=>navigate(SCORE_COUNTER)}/>
            <ArcadeButton text="Kitchen Tools" click={()=>navigate(KITCHEN_TOOLS)}/>
            <ArcadeButton text="Dice" click={()=>navigate(DICE)}/>
        </div>
    );
}

export default Menu;