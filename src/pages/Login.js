
import { Card, CardBody, CardHeader, Container, FormGroup, Input, Label,Button, Row, Col } from "reactstrap";
import Base from "../components/Base";
import App from "../App";
import {NavLink as ReactLink }from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login=()=>{
    const notify = () => toast("Wow so easy!");
    return(

        <Base>
            <div className=" Image ">
           <Container>
              
            <Row xs="7" >
              
                
                <Col sm={{size:6,offset:3}} >
                <Card>
                <CardHeader>
                    <h4>Login page</h4>
                </CardHeader>
                <CardBody>
                    <form>
                        <FormGroup>
                        <Label for="uid"><i class="zmdi zmdi-account"></i> Enter UID</Label>
                        <Input type="text" placeholder="Enter uid" />
        
                        </FormGroup>

                        <FormGroup>
                        <Label for="Password"><i class="zmdi zmdi-shield-security"></i> Enter Password</Label>
                        <Input type="password" placeholder="Enter Password" />
        
                        </FormGroup>
                        
                      <Container className="text-center">
                            <Button color="primary" >Login</Button>
                          <Button color="secondary" className="ms-2" >Reset</Button> 
                      </Container>
                      
                     
                    </form>
                </CardBody>

            </Card>
                </Col>
            </Row>
            

            
           </Container>
           </div>
        </Base>
            );
};
export default Login