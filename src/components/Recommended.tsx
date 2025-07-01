import {recommended} from "../data/recommended.ts";
import "../styles/recommended.scss"
import { Link } from "react-router-dom";
import { UseSelector } from "react-redux";
import { selectReccommended } from "../features/movie/movieSlice.js";

type recommendedProps={
  header: string;
  data:recommendedData[];
  sectionClass:string;
  divClass:string
}
export function Recommended({header="Recommended for you", data= recommended, sectionClass="recommended", divClass="recommended-item"}:recommendedProps){
  const movies = UseSelector(selectReccommended);
  return(
    <div>
      <h3>
        {header}
      </h3>
      <section className={sectionClass}>
      {data.map((item)=>(
        <div className={divClass} key={item.id}>
          <img src={item.image} alt={item.alt} />
        </div>
      ))}
      </section>
    </div>
  )
}