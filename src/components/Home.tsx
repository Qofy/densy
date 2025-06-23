import "../styles/home.scss"
import { ImageSlider } from "../components/ImageSlider.tsx"
import { Viewers } from "./Viewers.tsx"
import { Recommended } from "./Recommended.tsx"
export function Home (){
  return(
   <div className="home">
      {/* <h1>Welcome Home</h1> */}
      <ImageSlider/>
      <Viewers/>
      <Recommended/>
    </div>
  )
}