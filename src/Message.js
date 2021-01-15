import React from "react";
// import "./Message.css";

const Message = ({ message,timestamp,user,userImage}) =>{

    return(

        <div className="message">
        <img src={userImage} alt=" "/>
        <div className="message_info">
            <h4>
                {user} {  new Date(timestamp?.toDate()).toUTCString()}
            </h4>
            <p>{message}</p>
        </div>
    </div>
  )
}

export default Message;