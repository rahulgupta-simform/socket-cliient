import styles from "./styles.css";
import { useNavigate } from "react-router-dom";

const Home = ({ username, setUsername, room, setRoom, socket }) => {
  const navigate = useNavigate();

  const joinRoom = () => {
    if (room === "" && username === "") {
      alert("Please enter username and room");
      return;
    }
    socket.emit("join_room", { username, room });

    // Redirect to /chat
    navigate("/chat", { replace: true });
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>{`Group List`}</h1>
        <input
          className={styles.input}
          placeholder="Username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <select
          className={styles.input}
          onChange={(e) => setRoom(e.target.value)}
        >
          <option>-- Select Room --</option>
          <option value="group1">Group 1</option>
          <option value="group2">Group 2</option>
          <option value="group3">Group 3</option>
          <option value="group4">Group 4</option>
        </select>
        <button className={`btn ${styles.btn}`} onClick={joinRoom}>
          Join Room
        </button>
      </div>
    </div>
  );
};

export default Home;
