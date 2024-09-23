import React, { useState } from "react";
import { styles } from "../styles";
import axios from "axios";
import { LoadingOutlined } from "@ant-design/icons";
import Avatar from "../Avatar";
import SendText from "./SendText";

const EmailForm = (props) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  function getOrCreateUser(callback) {
    axios
      .put(
        "https://api.chatengine.io/users/",
        {
          username: email + "@email.com",
          email: email + "@email.com",
          secret: email + "@email.com",
        },
        { headers: { "Private-Key": process.env.REACT_APP_CE_PRIVATE_KEY } }
      )
      .then((r) => callback(r.data))
      .then(SendText(email + " Has logged into the TDH chat"))
      .catch((e) => console.log("Get or create user error", e));
    // sendtext info here
  }

  function getOrCreateChat(callback) {
    axios
      .put(
        "https://api.chatengine.io/chats/",
        { usernames: [email + "@email.com", "Chris"], is_direct_chat: true },
        {
          headers: {
            "Project-ID": process.env.REACT_APP_CE_PROJECT_ID,
            "User-Name": email + "@email.com",
            "User-Secret": email + "@email.com",
          },
        }
      )
      .then((r) => callback(r.data))

      // msg alert here

      .catch((e) => console.log("Get or create chat error", e));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    console.log("Sending Email", email);

    getOrCreateUser((user) => {
      props.setUser && props.setUser(user);
      getOrCreateChat((chat) => {
        setLoading(false);
        props.setChat && props.setChat(chat);
      });
    });
  }

  return (
    <div
      style={{
        ...styles.emailFormWindow,
        ...{
          height: "100%",
          opacity: "1",
          height: props.visible ? "100%" : "0px",
          opacity: props.visible ? "1" : "0",
        },
      }}
    >
      <div style={{ height: "0px" }}>
        <div style={styles.stripe} />
      </div>
      <div
        className="transition-5"
        style={{
          ...styles.loadingDiv,
          ...{
            zIndex: loading ? "10" : "-1",
            opacity: loading ? "0.33" : "0",
          },
        }}
      />
      <LoadingOutlined
        className="transition-5"
        style={{
          ...styles.loadingIcon,
          ...{
            zIndex: loading ? "10" : "-1",
            opacity: loading ? "1" : "0",
            fontSize: "82px",
            top: "calc(50% - 41px)",
            left: "calc(50% - 41px)",
          },
        }}
      />
      <div
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          textAlign: "center",
        }}
      >
        <Avatar
          style={{
            position: "relative",
            left: "calc(50% - 44px)",
            top: "10%",
          }}
        />
        <div style={styles.topText}>
          Send me a <br /> Message
        </div>
        <form
          onSubmit={(e) => handleSubmit(e)}
          style={{ position: "relative", width: "100%", top: "19.75%" }}
        >
          <input
            placeholder="Your Name"
            onChange={(e) => setEmail(e.target.value)}
            style={styles.emailInput}
          />
        </form>

        <div style={styles.bottomText}>
          Enter your name <br /> to get started.
        </div>
      </div>
    </div>
  );
};
export default EmailForm;
