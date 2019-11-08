import React from "react";

const PhotoCard = props =>{
    return (
        <div className="photoContent" key={props.id}>
            <div classname="image-container">
                <h2>{props.title}</h2>
            </div>
            <p>Credit: {props.credit}</p>        
            <img src={props.picture}/>
            <p>{props.date}</p>
            <p>{props.description}</p>

        </div>
    )

}
export default PhotoCard;