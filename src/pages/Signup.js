import { useState,setData, useEffect } from "react";
import { Button, Card, CardBody, CardHeader, Col, Container, FormGroup, Input, Label, Row } from "reactstrap";
import Base from "../components/Base";

const Signup=()=>{

     const [data, useData]= useState({
        name:'',
        email:'',
        number:'',
        profession:'',
        password:'',
        conferm:'',

     })
     const [error,useError]=useState({
        error:{},
        isError:false
     })

     useEffect(()=>{
            console.log(data);
     },[data])

     const handleChange=(event)=>{

            setData({...data,name:event.target.value})

                
            
                //console.log("name");
               // console.log(event.target.value) //value will print on console.
               
     }

    return(

            <Base>
                <div className="Ima Bac">
          
                
              <Row>
                <Col sm={{size:6,offset:3}} >

                <Card>
                    <CardHeader>
                        <h4>Customer Sign Up... </h4>
                    </CardHeader>

                    <CardBody>
                        {/* form start  */}

                        <form>
                            <FormGroup>
                                <Label for="name">Enter name</Label>
                               <Input type="text" 
                               placeholder="Enter Name"
                               id="name"
                               onChange={(e)=>handleChange(e)}
                               />
                            </FormGroup>

                            <FormGroup>
                                <Label for="email">Enter email</Label>
                               <Input type="email" placeholder="Enter email"/>
                            </FormGroup>

                            <FormGroup>
                                <Label for="number">Mobile number</Label>
                               <Input type="number" placeholder="Enter Number"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="profession">Enter Profession</Label>
                               <Input type="text" placeholder="Your Profession"/>
                            </FormGroup>

                            <FormGroup>
                                <Label for="password"> password</Label>
                               <Input type="password" placeholder="Enter password"/>
                            </FormGroup>

                            <FormGroup>
                                <Label for="conferm">conferm password</Label>
                               <Input type="password" placeholder="conform your password"/>
                            </FormGroup>

                            <Container className="text-center">
                                <Button color="primary"> Resister </Button>
                                <Button color="secondary" type="reset" className="ms-2" > Reset</Button>
                            </Container>
                           
                        </form>
                        
                    </CardBody>
                    <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                 
                </Card>
              
                </Col>
                
              </Row>
              </div>
           



            </Base>
            
    );
};
export default Signup