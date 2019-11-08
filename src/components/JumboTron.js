import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const JumboTron = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Photo of the Day</h1>
          <p className="lead">Brought to you by NASA and the wonderment that is the Universe.</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default JumboTron;