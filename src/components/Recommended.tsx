import {recommended} from "../data/recommended.ts";
import "../styles/recommended.scss"

type recommendedProps={
  heder: string;
  data:recommendedData[];
  sectionClass:string;
  divClass:string
}
export function Recommended({heder="Recommended for you", data= recommended, sectionClass="recommended", divClass="recommended-item"}:recommendedProps){
  return(
    <div>
      <h3>
        {heder}
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