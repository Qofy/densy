import "../styles/recommended.scss"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRecommend } from "../features/movie/movieSlice.js";

type RecommendData = {
  id:number;
  image:string;
  alt:string;
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
