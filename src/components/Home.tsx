import "../styles/home.scss"
import { ImageSlider } from "../components/ImageSlider.tsx"
import { Viewers } from "./Viewers.tsx"
import { Recommended } from "./Recommended.tsx"
import { recommended } from "../data/recommended.ts"
import { NewDisneyPlus } from "./NewDisneyPlus.tsx"
import { Originals } from "./Originals.tsx"
import { Trending } from "./Trending.tsx"
export function Home (){
  return(
   <div className="home">
      {/* <h1>Welcome Home</h1> */}
      <ImageSlider/>
      <Viewers/>
      <Recommended data={recommended} heder="Recommended for you" sectionClass="recommended" divClass="recommended-item"/>
      <NewDisneyPlus/>
      <Originals/>
      <Trending/>
    </div>
  )
}