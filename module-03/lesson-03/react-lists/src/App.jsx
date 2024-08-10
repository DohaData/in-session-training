// App.jsx
import { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import Spinner from "./components/Spinner";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [showMovies, setShowMovies] = useState(false);
  if (isLoading) {
    return (
      <div className="App">
        <Spinner />;
      </div>
    );
  }
  return (
    <div className="App">
      <h1>Ironhack Cinema</h1>
      <button onClick={() => setShowMovies(!showMovies)}>
        {showMovies ? "Hide Movies" : "Show Movies"}
      </button>
      {showMovies && <MovieList />}
    </div>
  );
}

export default App;
