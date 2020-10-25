import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrimarySearchAppBar from './components/appBar';
import HomePage from './components/homePage';
import CollaboratorPage from './components/collaboratorPage';
import MeetingPage from './components/meetingPage';
import Profile from './components/profile';
import MainPage from './components/mainPage';
import SignUp from './components/signUp';
import SignIn from './components/signIn';
import { Switch, Route } from 'react-router-dom';
import {ToastContainer} from "react-toastify";

function App() {
  return (
    <>
    <Switch>
         
    </Switch>
        <ToastContainer/>
        <PrimarySearchAppBar/>
        <Switch>
        <Route path='/signup' component={SignUp}/>
        <Route path='/homepage' component={HomePage}/>
            <Route path='/Signin' component={SignIn}/>
            
             <Route path='/tech-details' component={CollaboratorPage}/>
             <Route path='/join' component={MeetingPage}/>
             <Route path='/profile' component={Profile}/>
            
             <Route path='/' component={MainPage}/>
        </Switch>
    </>
  );
}

export default App;
/*
 <>
    <Switch>
         
    </Switch>
       
        <PrimarySearchAppBar/>
        <Switch>
             <Route path='/index' component={MainPage}/>
             <Route path='/tech-details' component={CollaboratorPage}/>
             <Route path='/join' component={MeetingPage}/>
             <Route path='/profile' component={Profile}/>
             <Route path='/' component={HomePage}/>
        </Switch>
    </>
    */
