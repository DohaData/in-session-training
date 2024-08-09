import Navbar from "./components/Navbar/Navbar";
import Greeting from "./components/Greeting/Greeting";
import Button from "./components/Button/Button";
import ReactPlayer from "react-player";
import "./App.css";

function App() {
  const students = [
    { name: "John Doe", age: 25 },
    { name: "Jane Doe", age: 24 },
    { name: "James Smith", age: 26 },
  ];

  return (
    <>
      <div className="App">
        <Navbar />
        <Greeting />
        <br />
        <Greeting />
        <br />
        <Greeting />
        <br />
        {students.map((student, index) => (
          <div key={index} className={student.name}>
            <h1>{student.name}</h1>
            <p>{student.age}</p>
          </div>
        ))}
        <Button onClick={() => alert("Hello, World!")}>Click me</Button>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          controls
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;
