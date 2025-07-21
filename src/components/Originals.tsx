import { selectOriginals } from "../features/movie/movieSlice.js";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/originals.scss";

export function Originals() {
  const movies = useSelector(selectOriginals);
  
  console.log("New Disney movies from Redux:", movies);

  if (!movies || movies.length === 0) {
    return (
      <div className="newdisney-container">
        <h3>Originals</h3>
        <p>No new movies available</p>
      </div>
    );
  }

  return (
    <div className="newdisney-container">
      <h3>Originals</h3>
      <section className="newdisney">
        {Array.isArray(movies) && movies.map((movie) => (
          movie && movie.id ? (
            <div className="newDisney-item" key={movie.id}>
              <Link to={`/detail/${movie.id}`}>
                <img 
                  src={movie.cardImg || movie.image} 
                  alt={movie.title || "Movie"} 
                />
              </Link>
            </div>
          ) : null
        ))}
      </section>
    </div>
  );
}
