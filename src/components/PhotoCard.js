import React from 'react';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';

const PhotoCard = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardSubtitle>Copyright: {props.credit}</CardSubtitle>
        </CardBody>
        <img width="100%" src={props.picture} alt="Astronomy Picture" />
        <CardBody>
          <CardText>{props.description}}</CardText>
          <CardLink href="https://apod.nasa.gov/apod/archivepix.html">Discover the Universe</CardLink>
          <CardLink href="https://hubblesite.org/">HubbleSite.org</CardLink>
        </CardBody>
      </Card>
    </div>
  );
};

export default PhotoCard;








// import React from "react";

// const PhotoCard = props =>{
//     return (
//         <div className="photoContent" key={props.id}>
//             <div classname="image-container">
//                 <h2>{props.title}</h2>
//             </div>
//             <p>Credit: {props.credit}</p>        
//             <img src={props.picture}/>
//             <p>{props.date}</p>
//             <p>{props.description}</p>

//         </div>
//     )

// }
// export default PhotoCard;