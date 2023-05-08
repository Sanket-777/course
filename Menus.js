import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default function Menu()
{
    return(
        <>
          <ListGroup>
              <ListGroupItem tag="a" href="#1" action
              >
                Home
              </ListGroupItem>
              <ListGroupItem tag="a" href="#1" action
              >
                Add Courses
              </ListGroupItem>
              <ListGroupItem tag="a" href="#1" action
              >
               View Courses
              </ListGroupItem>
              <ListGroupItem tag="a" href="#1" action
              >
                About
              </ListGroupItem>
              <ListGroupItem tag="a" href="#1" action
              >
                Contact
              </ListGroupItem>

          </ListGroup>
        </>
    )
}