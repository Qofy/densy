import "../styles/recommended.scss"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRecommend } from "../features/movie/movieSlice.js";

type RecommendData = {
  id:string;
  cardImg?:string;
  title?:string;
  image:string;
  alt:string;
  [key: string]: any; // Allow additional properties
}

type RecommendedProps={
  header?: string;
  data?:RecommendData[];
  sectionClass?:string;
  divClass?:string
}

export function Recommended({
  header = "Recommended for you",
  data = [],
  sectionClass = "recommended",
  divClass = "recommended-item"
}: RecommendedProps) {
  const moviesFromRedux = useSelector(selectRecommend);
  
  // Use Redux data if available, otherwise use props data
  const displayData = moviesFromRedux && moviesFromRedux.length > 0 ? moviesFromRedux : data;

  console.log("Recommended movies from Redux:", moviesFromRedux); // Debug log

  if(!displayData || displayData.length ===0){
    return(
      <div className="recommended-container">
        <h3>{header}</h3>
        <p>No movies available</p>
      </div>
    );
  }
  return (
    <div className="recommended-container">
      <h3>{header}</h3>
      <section className={sectionClass}>
        {displayData.map((item) => (
          <div className={divClass} key={item.id}>
            <Link to={`/detail/${item.id}`}>
            <img src={item.cardImg || item.image} alt={item.title || item.alt} />
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}
