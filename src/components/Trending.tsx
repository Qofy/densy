import { Recommended } from "../components/Recommended.tsx"
import { newDisney } from "../data/newDisney.ts";
import "../styles/trending.scss"

export function Trending(){
  return(
    <Recommended sectionClass="trending" divClass="trending-item" heder="Trending" data={newDisney}/>
  )
}