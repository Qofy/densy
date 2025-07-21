import "../styles/recommended.scss"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRecommend } from "../features/movie/movieSlice.js"; // ← Changed to selectRecommend

type RecommendedData = {
  id: number;
  image: string;
  alt: string;
}

type recommendedProps = {
  header?: string;
  data?: RecommendedData[];
  sectionClass?: string;
  divClass?: string;
}

export function Recommended({
  header = "Recommended for you", 
  data, 
  sectionClass = "recommended", 
  divClass = "recommended-item"
}: recommendedProps) {
  const movies = useSelector(selectRecommend); // ← Changed to selectRecommend
  console.log("Recommended movies from Redux:", movies);
  
  const displayData = movies && movies.length > 0 ? movies : data;
  
  if (!displayData || displayData.length === 0) {
    return (
      <div>
        <h3>{header}</h3>
        <p>Loading recommendations...</p>
      </div>
    );
  }

  return (
    <div>
      <h3>{header}</h3>
      <section className={sectionClass}>
        {Array.isArray(displayData) && displayData.map((item: any) => (
          item && item.id ? (
            <div className={divClass} key={item.id}>
              <Link to={`/detail/${item.id}`}>
                <img src={item.cardImg || item.image} alt={item.title || item.alt} />
              </Link>
            </div>
          ) : null
        ))}
      </section>
    </div>
  );
}
