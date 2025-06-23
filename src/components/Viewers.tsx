import "../styles/viewers.scss"
import { viewersData } from "../data/viewers.ts"

export function Viewers(){
  return(
    <section className="viewers">
      {viewersData.map((item) => (
         <div key={item.id} className="viewers-item">
            <img src={item.image} alt={item.alt} />
            <video autoPlay={true} loop={true} playsInline={true} muted>
              <source src={item.src}/>
            </video>
         </div>
       ))}
    </section>
  )
}