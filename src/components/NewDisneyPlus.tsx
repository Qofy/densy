import { Recommended } from "../components/Recommended.tsx"
import { newDisney } from "../data/newDisney.ts";
import "../styles/newDisneyplus.scss"

export function NewDisneyPlus(){
  return(
    <Recommended sectionClass="newdisney" divClass="newDisney-item" header="New to Disney+" data={newDisney}/>
  )
}