function MovieCard(props) {
  return (
    <div key={props.key}>
      <h2>{props.movie.title}</h2>
      <p>{props.movie.director}</p>
      <p>{props.movie.hasOscars}</p>
      <p>{props.movie.IMDBRating}</p>
        <button onClick={() => props.updateMovie(props.movie._id)}>Delete</button>
    </div>
  );
}

export default MovieCard;
