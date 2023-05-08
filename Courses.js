import React from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container
}
 from "reactstrap";

 export default function courses({course}){
        return(
            <>
            <Card className="text-center">
                <CardBody>
                    <CardTitle className="font-weight-bold">{course.title} Course</CardTitle>
                    <CardSubtitle>{course.description}</CardSubtitle>
                </CardBody>
                <Container className="text-center">
                <Button color="danger">
                    Delete
                </Button>
                <Button color="warning" className="m-2">
                    Update
                </Button>
                </Container>
                
            </Card>
            </>
        );
 }

