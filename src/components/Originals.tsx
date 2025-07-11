import { Recommended } from "../components/Recommended.tsx"
import "../styles/originals.scss"
import { selectOriginals } from "../features/movie/movieSlice.js";
import { useSelector } from "react-redux";

export function Originals(){
  const ori = useSelector(selectOriginals);
  console.log("Originals movies from Redux:", ori); // Debug log
  return(
    <Recommended sectionClass="originals" divClass="originals-item" header="Originals" data={ori}/>
  )
}