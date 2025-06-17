import "../styles/home.scss"
import { ImageSlider } from "../components/ImageSlider.tsx"
export function Home (){
  return(
    <div className="home">
      <h1>Welcome Home</h1>
      <ImageSlider/>
    </div>
  )
}