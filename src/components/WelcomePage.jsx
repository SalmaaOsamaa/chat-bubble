import React from 'react';
import logo from '../assets/images/chatbot.png'
import classes from './welcomepage.module.css'
import { useNavigate } from 'react-router-dom';

export default function WelcomePage() {
    const navigate = useNavigate()
     const handleOnClick = () => {
        navigate('/main-page')
     }
  return (
    <div className={classes.container}>
    <div className={classes.imagehalf}>
      <img src={logo} className={classes.image} alt="Welcome" />
    </div>
    <div className={classes.texthalf}>
      <p>Welcome to Buddy chat app! <br/> <span>Connecting people together !</span></p>
   
      <button
      className={classes.styledbutton}
       onClick={handleOnClick}>Click here to start </button>
    </div>
  </div>
  );
}
