import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

 import { Button, Container, Form, FormGroup,Input} from "reactstrap";
const Addcourse = () => {
    return (
        <>
            <div className="main-container">
                <h1 className="text-center my-3">Fill the Form Details</h1>
                <Form>
                    <FormGroup> 
                        <label for="userId" >course id</label>
                        <Input type="text" placeholder="Enter here" name="userId" id="userId" />
                    </FormGroup>
                    <FormGroup> 
                        <label for="title" >Course title</label>
                        <Input type="text" placeholder="Enter title here" name="title" id="title" />
                    </FormGroup>
                    <FormGroup> 
                        <label for="description" >Course Description</label>
                        <Input type="textarea" placeholder="Enter decription here" name="description" id="description"
                         style={{height:200}} />
                    </FormGroup>
                    <Container className="text-center">
                        <Button color="success">Add Courses</Button>
                        <Button color="warning" className="m-5">Clear</Button>
                    </Container>
                </Form>
            </div>
        </>
    )
}

export default Addcourse;