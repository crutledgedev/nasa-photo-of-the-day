import React from "react";

const PhotoCard = props =>{
    return (
        <div className="photo-list" key={props.id}>
            <h2>Hello{props.title}</h2>
            <p>test{props.date}</p>
            <img src={props.picture}/>
            <p>double test{props.description}</p>

        </div>
    )

}
export default PhotoCard;