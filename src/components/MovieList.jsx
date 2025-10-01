function MovieList({ movies }) {
  return (
    <ul className="movie-list">
      {/* .map() per trasformare ogni oggetto 'movie' in un elemento <li>.
       */}
      {movies.map((movie) => (
        <li key={movie.title}>
          <strong>{movie.title}</strong> ({movie.genre})
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
