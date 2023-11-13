import React, { useState } from 'react';
import image from "../assets/images/user.png";
import {FiEdit2} from 'react-icons/fi'
import classes from './profilepicture.module.css'
function ProfilePicture() {
  const [profilePic, setProfilePic] = useState(image);
  const fileInputRef = React.createRef();

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setProfilePic(fileUrl);
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };
// const iconStyle = {
//     position: "absolute",
//     top: "15rem",
//     right: "49.5rem",
//     backgroundColor: "#0065FF",
//     borderRadius: "50px",
//     transform: "scale(1.2)",
//     color: "white",
//     cursor:"pointer",
//     padding:"3px"
// }
  return (
    <div >
     <div className={classes.wrapperdiv}>
     <img
        src={profilePic}
        alt="Profile"
        onClick={handleClick}
        style={{ cursor: 'pointer', width: '50px', height: '50px', borderRadius: '50%' }}
      />
        <FiEdit2
        className={classes.edit}
        onClick={handleClick}
      />
     </div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileSelect}
        style={{ display: 'none' }}
      />
    </div>
  );
}

export default ProfilePicture;
