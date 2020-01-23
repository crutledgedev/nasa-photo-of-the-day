import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";

export default function PhotoList(){
 const[photo, setPhoto] = useState([]);
 const[year, setYear] = useState("2012");
 const[month, setMonth] = useState("03");
 const[day, setDay] = useState("02");


 useEffect(() => {
     axios
     .get(`https://api.nasa.gov/planetary/apod?api_key=TyBY2uhZ2HP5ZipYNT7ocoGT8Rbim191rgoHwcCx&date=${year}-${day}-${month}`)
         .then(response => {
             setPhoto(response.data);
         console.log("Picker", response);
     })
     .catch(err => ("there has been an error"));
 },[]);

return (
    <div className="photo">
        <PhotoCard
        title={photo.title}
        picture={photo.url}
        date={photo.date}
        description={photo.explanation}
        credit={photo.copyright}

        
        />

    </div>
)
}