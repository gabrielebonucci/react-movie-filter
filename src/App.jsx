import { useEffect, useState, userEffect } from "react";
import MovieList from "./components/MovieList";
import GenreFilter from "./components/GenreFilter";
import "./App.css";

const initialMovies = [
  { title: "Inception", genre: "Fantascienza" },
  { title: "Il Padrino", genre: "Thriller" },
  { title: "Titanic", genre: "Romantico" },
  { title: "Batman", genre: "Azione" },
  { title: "Interstellar", genre: "Fantascienza" },
  { title: "Pulp Fiction", genre: "Thriller" },
];

const genres = ["tutti", ...new Set(initialMovies.map((movie) => movie.genre))];

function App() {
  // stati per memorizzzare il genere attualmente selezionato e per memorizzare la lista dei film da visualizzare//
  const [selectedGenre, setSelectedGenre] = useState("tutti");
  const [filteredMovies, setFilteredMovies] = useState(initialMovies);

  //esegue la logica di filtro ogni volta che `selectedGenre` cambia
  useEffect(() => {
    if (selectedGenre === "tutti") {
      setFilteredMovies(initialMovies);
    } else {
      const filtered = initialMovies.filter(
        (movie) => movie.genre === selectedGenre
      );
      setFilteredMovies(filtered);
    }
  }, [selectedGenre]); // dipendenza che scatena l'effetto//

  return (
    <div className="container">
      <h1>Filtra Film per genere</h1>

      <GenreFilter
        genres={genres}
        selectedGenre={selectedGenre}
        onGenreChange={setSelectedGenre}
      />

      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
