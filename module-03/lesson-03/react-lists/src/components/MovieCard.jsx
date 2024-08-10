function MovieCard(props) {
    function generateStars(rating) {
      let stars = "";
      for (let i = 0; i < Math.round(rating); i++) {
        stars += "⭐️";
      }
      return stars;
    }
  return (
    <div key={props.movie._id}>
      <h2>{props.movie.title}</h2>
      <p>{props.movie.director}</p>
      {/* {props.movie.hasOscars && <p>Got the Oscar Award! </p>}
      {!props.movie.hasOscars && <p>Great movie but no Oscars! </p>} */}
      {props.movie.hasOscars ? <p>Got the Oscar Award! </p> : <p>Great movie but no Oscars!</p>}
      <p>{generateStars(props.movie.IMDBRating)}</p>
      <button onClick={() => props.updateMovie(props.movie._id)}>Delete</button>
    </div>
  );
}

export default MovieCard;
