import React from 'react';
import Styled from 'styled-components';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';

const ContentContainer = Styled.div`
  max-width: 60%;
  margin: 0 auto;
  font-size: 1.5rem;
`;
const Descriptor = Styled.p`
font-size: 1.2rem;
`;
{/* <CardText> */}
const PhotoCard = (props) => {
  return (
    <ContentContainer>
      <Card>
        <CardBody>
          <CardTitle>{props.title} </CardTitle>
        </CardBody>
        <img width="100%" src={props.picture} alt="Astronomy Picture" />
        <CardBody>
        <CardSubtitle>Copyright: {props.credit}, {props.date}</CardSubtitle>
          <Descriptor>{props.description}</Descriptor>
          <CardLink href="https://apod.nasa.gov/apod/archivepix.html">Discover the Universe</CardLink>
          <CardLink href="https://hubblesite.org/">HubbleSite.org</CardLink>
        </CardBody>
      </Card>
    </ContentContainer>
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