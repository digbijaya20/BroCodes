import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardGroup } from 'react-bootstrap';
import {Link} from 'react-router-dom';

class MainPage extends Component {
    render() {
        return (
        <>
            <div className="" style={{backgroundColor:'#30353E',height:''}}>
                <div className="containerFluid">
                    
                   <h2 className="ml-4 d-flex" style={{color:'#FFFFFF'}}>BroCodes</h2>
                   <Link to="/signin">
                   <span className="mr-4" style={{color:'#B3B5B8'}}>
                       Login
                   </span>
                   </Link>
                   <Link to="/signup">
                   <span style={{color:'#B3B5B8'}}>Signup</span>
                   </Link>
                   </div>
                   <div className="mt-5">
                       <h1 className="d-flex flex-row  justify-content-center" style={{color:'#FFFFFF'}}>
                           Share Code in Real-time with Developers
                           </h1>
                       <p className="d-flex flex-row  justify-content-center" style={{color:'#B3B5B8',fontSize:'20px'}} >
                           An online code editor for interviews, troubleshooting, teaching & more…
                           </p>
                        <div className="d-flex flex-row  justify-content-center mt-5">
                        <Link to="/join">
                           <Button className="p-3" variant="contained" color="secondary">
                                 Share Code Now
                           </Button>
                           </Link>
                       </div>
                       <div className="mt-4">
                           <p style={{color:'#B3B5B8'}} className="d-flex flex-row  justify-content-center">
                               Share code for free.
                               </p>
                       </div>
                   </div>
            </div>
            <div style={{backgroundColor:'#4D76BA',height:'260px',marginTop:'30px'}}> 
 <CardGroup className="d-flex flex-row m-2 justify-content-between ">
  <Card style={{backgroundColor:'#4D76BA'}}>
    <Card.Body>
      <Card.Title style={{color:'#FFFFFF'}}>Code with your team</Card.Title>
      <Card.Text style={{color:'#FFFFFF'}}>
      Open a BroCodes editor, write or copy code, then share it with friends and colleagues. 
      Pair program and troubleshoot together.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card style={{backgroundColor:'#4D76BA'}}>
    <Card.Body>
      <Card.Title style={{color:'#FFFFFF'}}>Interview developers</Card.Title>
      <Card.Text style={{color:'#FFFFFF'}}>
      Set coding tasks and observe in real-time when interviewing remotely or in person.
       Nobody likes writing code on a whiteboard.{' '}
      </Card.Text>
    </Card.Body>
  </Card>
  <Card style={{backgroundColor:'#4D76BA'}}>
    <Card.Body>
      <Card.Title style={{color:'#FFFFFF'}}>Teach people to program</Card.Title>
      <Card.Text style={{color:'#FFFFFF'}}>
      Share your code with students and peers then educate them. 
      Universities and colleges around the world use BroCodes every day.
      </Card.Text>
    </Card.Body>
    
  </Card>
</CardGroup>

            </div>
            <div style={{backgroundColor:'#30353E',height:'100px'}}><br></br>
                   <p style={{color:'#B3B5B8',textAlign:"center"}}>Created by Digbijaya Biswal and Ankit Nidhi Shroff under guidence by Mrigank Kaushik.</p>

            </div>


            
        </>
        );
    }
}

export default MainPage;