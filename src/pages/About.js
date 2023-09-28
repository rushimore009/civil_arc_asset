
import Base from "../components/Base";

import { Card, CardBody, CardHeader, Container, FormGroup, Input, Label,Button, Row, Col } from "reactstrap";

const About=()=>{
    return(
            <Base >
          
           
            <div className=" Image ">
          
              <br/>
              <br/>
              <br/>
            
            <Row  >
              
                
                <Col sm={{size:6,offset:3}} >
              
               
                <h1>About Us </h1>
               
             
                    <form>
                        <FormGroup>
                        <p  > To subscribe click     .
                <a href="https://youtu.be/MQQ7lCMV86A" > <i class="zmdi zmdi-youtube"></i> </a>
            </p>
            <p  > To join Us click     .
                <a href="https://www.instagram.com/civil_arc_/?hl=en" > <i class="zmdi zmdi-laptop"></i></a>
            </p>
            <b  ><i class="zmdi zmdi-smartphone-iphone"></i> Contact us -8605090900   
               
            </b>
                        </FormGroup>

                      
                     
                    </form>
               

            
                </Col>
            </Row>
            

            
          
           </div>




            
            </Base>

    );

  
};
export default About