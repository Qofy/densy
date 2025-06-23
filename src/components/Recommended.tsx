import {recommended} from "../data/recommended.ts";
import "../styles/recommended.scss"
export function Recommended(){
  return(
    <div>
      <h3>
        Recommend for you
      </h3>
      <section className="recommended">
      {recommended.map((item)=>(
        <div className="recommended-item" key={item.id}>
          <img src={item.image} alt={item.alt} />
        </div>
      ))}
      </section>
    </div>
  )
}