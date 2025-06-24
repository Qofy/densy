import { Recommended } from "../components/Recommended.tsx"
import { newDisney } from "../data/newDisney.ts";
import "../styles/originals.scss"
export function Originals(){
  return(
    <Recommended sectionClass="originals" divClass="originals-item" heder="Originals" data={newDisney}/>
  )
}