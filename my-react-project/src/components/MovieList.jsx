import { useEffect } from "react";

function MovieList() {

    const movies = ["Lord of the Rings", "Harry Potter", "The Matrix", "The Godfather"];

    const HTMLMovies = movies.map((movie, index) => {
        return <p key={movie}>{index + 1} - {movie}</p>
    })

    useEffect(() => {
        console.log('MovieList mounted')
    }, [])

    useEffect(() => {
      return () =>
        console.log('MovieList unmounted')
    }, [])

  return (
    <section>
        <h2>Movies</h2>
         {HTMLMovies}
    </section>
    
  )
}

export default MovieList