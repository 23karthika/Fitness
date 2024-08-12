import React, { useState } from "react";
import image from "../../assets/images/chatlogo.png";
import { Button } from "@mui/material";
import "./Chatbot.css";
import MessagesChat from "../MessagesChat";
import { analyze } from "../utils";

export default function Chatbot() {
  const [message, setMessages] = useState([
    {
      message: "Hi, May I know ur name?",
    },
  ]);
  const [text, setText] = useState("");

  const onSend = () => {
    let list = [...message, { message: text, user: true }];
    if (list.length > 2) {
      const reply = analyze(text);
      list = [...list, { message: reply }];
    } else {
      list = [
        ...list,
        {
          message: `Hi, ${text}`,
        },
        {
          message: "How can i help you?",
        },
      ];
    }
    setMessages(list);
    setText("");
    setTimeout(() => {
      document.querySelector("#copyright").scrollIntoView();
    });
  };

  return (
    <>
    <div className="logo">
                <a href="/home"><img src="https://img.freepik.com/free-vector/gradient-gym-page-linkedin-profile-picture_742173-11442.jpg?t=st=1721897230~exp=1721900830~hmac=ccf5482db677e982247255862244e61a146e2156d2a820f092b0112355444862&w=740" alt='travel logo' height={40} width={50}/></a>
                <h3>KineticKraze</h3>
         </div> 
    <div className="Chatbot">
      <div className="d-flex align-items-center justify-content-center">
        <img src={image} alt="logo" height={200} width={200} />
      </div>
      <div className="chat-message">
        {message.length > 0 &&
          message.map((data) => <MessagesChat {...data} />)}
        <div className="d-flex mt-2">
          <input
            type="text"
            className="form-control"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button
            sx={{ backgroundColor: "skyblue", color: "black" }}
            className="ms-2"
            onClick={onSend}
          >
            SEND
          </Button>
        </div>
        <div id="copyright" className="mt-3">
          Copyrights reserved Kinetic Kraze
        </div>
      </div>
    </div>
    </>
  );
}
