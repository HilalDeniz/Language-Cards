import "./Card.css"
import {languages} from "../../helpers/data";
import Item from "../item/Item";

const Card = () => {
    return (
        <div className="card-area-container">
            <h1 className="language-title">LANGUAGES</h1>
            <div className="cards-container">
                {
                    languages.map((item,index) => {
                        //Props name = card 
                        return <Item card={item} key={index}/>
                    })
                }
            </div>
        </div>
    );
};

export default Card;