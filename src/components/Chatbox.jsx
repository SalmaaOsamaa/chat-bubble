import React, { useEffect, useState } from "react";
import classes from "./chatbox.module.css";
import { AiOutlineClose, AiOutlineDelete } from "react-icons/ai";
import { FiMaximize2 } from "react-icons/fi";
import { FiMinimize2 } from "react-icons/fi";
import { BsFillSendFill } from "react-icons/bs";
import ProfilePicture from "./ProfilePicture";
import { useDispatch, useSelector } from "react-redux";
import words from "../assets/words/words";
import {
  addMessage,
  clearMessages,
  deleteMessage,
  selectMessages,
} from "../store/slices/messages";

export default function Chatbox({ onClose }) {

  const language = useSelector((state) => state.auth.language) || "en";
  const dispatch = useDispatch();
  const messages = useSelector(selectMessages);

  // initial state, setting up necessary variables and configurations.

  const [isActive, setIsActive] = useState(true);
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState("");
  const [isMaximized, setIsMaximized] = useState(false);
  const [isMessageExist, setIsMessageExist] = useState(false);
  
  //functions
  const toggleBoxSize = () => {
    setIsMaximized(!isMaximized);
  };
  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };
  const handleInputSubmit = () => {
    const trimmedInput = userInput.trim();
    if (trimmedInput) {
      setError("");
      dispatch(addMessage(trimmedInput));
      setIsMessageExist(true);
    } else {
      setError("Please Enter A valid Message");
    }
    setUserInput("");
    // setHumanMessage(userInput);
  };
  const handleClearMessages = () => {
    dispatch(clearMessages());
  };
  const handleDeleteMessage = (index) => {
    dispatch(deleteMessage(index));
  };

  // variables, css classes and styles that are applied conditionally based on the change of the prev state
 
  //classes variables
  const inputWrapperClass = isMaximized
    ? classes.inputwrapper
    : classes.mininputwrapper;
    const inputClass = isMaximized ? classes.input : classes.inputmin;
//styles
  const statusStyle = {
    color: isActive ? "green" : "red",
  };
  const boxStyle = {
    transform: isMaximized ? "scale(1)" : "scale(0.8)",
    transition: "all 0.3s ease-in-out",
  };

  const normalInputStyle = {
    width: "300px",
  };
  const maximizedInputStyle = {
    width: "500px",
  };
  const containerDirectionStyle = {
    direction : language === 'en'  ? "ltr" : "rtl"
  }

  return (
    <div className={classes.container} style={containerDirectionStyle}>
      <div className={classes.wrapper} style={boxStyle}>
        {error ? <p style={{ color: "red" }}>{error}</p> : ""}
        <div className={classes.content}>
          <div className={classes.header}>
            <div className={classes.img}>
              <ProfilePicture />
              Buddy
            </div>
            <div className={classes.name}>
            <AiOutlineDelete onClick={handleClearMessages} />

              {isMaximized ? (
                <FiMinimize2 onClick={toggleBoxSize} />
              ) : (
                <FiMaximize2 onClick={toggleBoxSize} />
              )}
              <AiOutlineClose onClick={onClose} />

            </div>
          </div>
          <div className={classes.right}>
            <div className={classes.status} style={statusStyle}>
              {isActive ? (
                <p>{words.ACTIVE[language]}</p>
              ) : (
                <p>{words.INACTIVE[language]}</p>
              )}
            </div>
          </div>
          {!isMessageExist && (
            <p className={classes.nomessage}>{words.START[language]}</p>
          )}

          <div className={classes.messages}
          >
            {messages.map((message, index) => (
              <div className={classes.msgParagraph}>
                {isMessageExist && (
                  <p key={index} className={classes.humanmessage}>
                    {message}
                  </p>
                )}
                <AiOutlineDelete
                  size={25}
                  onClick={() => handleDeleteMessage(index)}
                />
              </div>
            ))}
          </div>

          <div className={inputWrapperClass}>
            <input
              type="text"
              style={isMaximized ? maximizedInputStyle : normalInputStyle} // Apply conditional styling here
              className={inputClass}
              placeholder={words.ENTER_YOUR_MESSAGE[language]}
              value={userInput}
              onChange={handleInputChange}
            />
            <div className={classes.btn}>
              <button onClick={handleInputSubmit}>
                <BsFillSendFill /> {words.SEND[language]}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
