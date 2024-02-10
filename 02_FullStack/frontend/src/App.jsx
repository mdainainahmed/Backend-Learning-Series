import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [joke, setJoke] = useState([]);

  useEffect(() => {
    axios.get("/api/jokes").then((res) => setJoke(res.data));
  });

  return (
    <>
      <h1>MERN Full Stack</h1>
      <h2>Jokes: {joke.length}</h2>
      {joke.length > 0 ? joke.map(joke => <div style={{border: "1px solid white"}} key={joke.id}>
          <div>
            <h3>ID: {joke.id}</h3>
            <h3>Title: {joke.title}</h3>
            <h3>Content: {joke.content}</h3>
          </div>
      </div>) : null}
    </>
  );
}

export default App;
