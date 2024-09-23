import React, { useState, useEffect } from "react";
import reactLogo2 from "./thatdamhill.png";
// import Marquee from "react-fast-marquee";
// import SupportEngine from "../../SupportEngine";
// import { ChatEngine, getOrCreateChat } from 'react-chat-engine';
// import SupportWindow from "../../SupportEngine/SupportWindow";
import io from "socket.io-client";
import Chat from "./Chat";
import "./About.css";

// const socket = io.connect("http://localhost:8080");
const socket = io.connect("https://chat2-1-lw5o.onrender.com");

console.log("Socket Connected?", socket);

export const About = () => {
  const [token, setToken] = useState([]);

  useEffect(() => {}, []);

  const [username, setUsername] = useState("");
  // const [room, setRoom] = useState("99");
  var room = "99";
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      socket.emit("get_name", username);
      setShowChat(true);
    }
  };
  return (
    <section className="content_section">
      <div className="container2">
        <div className="item item-1"></div>
        <div className="item item-2">
          <img src={reactLogo2} className="mainlogo" style={{ width: 350 }} />
        </div>
        <div className="item item-3"></div>
        <div className="item item-4">
          <div className="app">
            {!showChat ? (
              <div className="joinChatContainer">
                <h3>Enter your Name</h3>
                <center>
                  <input
                    type="text"
                    placeholder="Name..."
                    onChange={(event) => {
                      setUsername(event.target.value);
                    }}
                  />
                  <button onClick={joinRoom}>Join Chat</button>
                </center>
              </div>
            ) : (
              <Chat socket={socket} username={username} room={room} />
            )}
          </div>
        </div>
      </div>
      <div className="item item-5" id="chart"></div>
    </section>

    // <ChatEngine
    //     visible='true'
    //     user='Steve@email.com'
    //     chat='ca-8377a408-f3f9-42ef-b9c2-b3db7105d144'
    //   />
    // <ChatEngine
    // height='50vh'
    // userName='Chris'
    // userSecret='5M8tYp6.wA4QTe9'
    // projectID={process.env.REACT_APP_CE_PROJECT_ID}
    // renderNewChatForm={(creds) => renderChatForm(creds)}
    // />
  );
};

export default About;
