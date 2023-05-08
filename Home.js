import React from 'react';
import {  Button,Container } from 'reactstrap';

export default function JumbotronExample() {
    
    return (
      <>
      <div class="rounded px-3 px-sm-4 py-3 py-sm-5 text-center " style={{backgroundColor:"#CFD4DC"}}>
        <h1 >Wel-Come to our Website</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima accusamus et dolores aliquid fugit blanditiis recusandae distinctio iusto accusantium deserunt reiciendis amet id, praesentium voluptatem repellendus? Eaque, doloremque amet?</p>
        <Container>
            <Button color="primary" outline>Start Using</Button>
        </Container>
      </div>
        
      </>
    );
  }