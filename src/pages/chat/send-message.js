import styles from "./styles.css";
import React, { useState } from "react";

// This component handles sending messages
const SendMessage = ({ socket, username, room }) => {
  const [message, setMessage] = useState(""); // State hook to manage the message input

  // Function to send the message
  const sendMessage = () => {
    if (message !== "") {
      const __createdtime__ = Date.now(); // Timestamp for the message
      socket.emit("send_message", { username, room, message, __createdtime__ }); // Emitting a socket event with the message data
      setMessage(""); // Clearing the message input
    }
  };

  return (
    <div className={styles.sendMessageContainer}>
      <input
        className={styles.messageInput}
        placeholder="Message..."
        onChange={(e) => setMessage(e.target.value)} // Updating the message state on input change
        value={message} // Binding the message state to the input value
      />
      <button className="btn btn-primary" onClick={sendMessage}>
        Send Message
      </button>
    </div>
  );
};

export default SendMessage;
