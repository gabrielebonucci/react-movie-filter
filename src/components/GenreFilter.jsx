function GenreFilter({ genres, selectedGenre, onGenreChange }) {
  const handleSelectChange = (event) => {
    // Quando l'utente sceglie, comunichiamo il nuovo valore (`event.target.value`)
    // al componente App chiamando la funzione che ci ha passato.
    onGenreChange(event.target.value);
  };

  return (
    <div className="filter-container">
      <label htmlFor="genre-select">Scegli un genere: </label>
      <select
        id="genre-select"
        value={selectedGenre}
        onChange={handleSelectChange}
      >
        {/*per creare un'<option> per ogni genere*/}

        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre.charAt(0).toUpperCase() + genre.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}

export default GenreFilter;
