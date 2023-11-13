import React from 'react';
import classes from './chaticon.module.css'
import chaticon from '../assets/images/chatbot.png'
 export default function ChatIcon({ onClick }) {
    return (
        <div className={classes.chaticon} onClick={onClick}>
          <img src={chaticon} alt="Chat Icon" className={classes.image} />
        </div>
      );
}
