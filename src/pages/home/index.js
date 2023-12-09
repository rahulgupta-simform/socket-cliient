import styles from "./styles.css";
import { useNavigate } from "react-router-dom";

const Home = ({ username, setUsername, room, setRoom, socket }) => {
  const navigate = useNavigate();

  const joinRoom = () => {
    console.log("join room");
    if (room !== "" && username !== "") {
      console.log("join room", room, username);
      socket.emit("join_room", { username, room });
    }

    // Redirect to /chat
    navigate("/chat", { replace: true });
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>{`<>DevRooms</>`}</h1>
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
          <option value="javascript">JavaScript</option>
          <option value="node">Node</option>
          <option value="express">Express</option>
          <option value="react">React</option>
        </select>
        <button className={`btn ${styles.btn}`} onClick={joinRoom}>
          Join Room
        </button>
      </div>
    </div>
  );
};

export default Home;
