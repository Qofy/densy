import "../styles/home.scss"
import { ImageSlider } from "../components/ImageSlider.tsx"
import { Viewers } from "./Viewers.tsx"
import { Recommended } from "./Recommended.tsx"
import { recommended } from "../data/recommended.ts"
import { NewDisneyPlus } from "./NewDisneyPlus.tsx"
import { Originals } from "./Originals.tsx"
import { Trending } from "./Trending.tsx"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import db from "../firebase.js"
import { setMovies } from "../features/movie/movieSlice.js"
import { selectUserName } from "../features/userSlice.js"
import { collection, onSnapshot } from "firebase/firestore"
export function Home (){
  type MovieData = {
    id: string;
    type:string;
    [key:string]:any;
  }
  
  const dispatch = useDispatch();
  const username = useSelector(selectUserName);

  let recommend: MovieData[] =[]
  let newDisney: MovieData[] = []
  let trending: MovieData[]=[]
  let originals: MovieData[]= []

  useEffect(()=>{
    const unsubscribe = onSnapshot(collection(db, 'movies'), (snapshot) =>{
      snapshot.docs.forEach((doc)=>{
        const movieData = {id: doc.id, ...doc.data()} as MovieData;
        // console.log("Movie Data: ", movieData);
        switch(movieData.type){
          case "recommend":
            recommend.push(movieData);
            break;
            case "trending":
              trending.push(movieData)
              break;
              case "newDisney": 
              newDisney.push(movieData)
              break;
              case "original":
                originals.push(movieData);
                break;
                default:
                  console.log("Unknown movie type: ", movieData.type)
        }
      });
      dispatch(setMovies({
        recommend: recommend,
        newDisney: newDisney,
        trending: trending,
        originals: originals
      }))
    })
    return () => unsubscribe();
  }, [dispatch, recommend,trending,originals,newDisney, username])
  return(
   <div className="home">
      {/* <h1>Welcome Home</h1> */}
      <ImageSlider/>
      <Viewers/>
      <Recommended data={recommended} header="Recommended for you" sectionClass="recommended" divClass="recommended-item"/>
      <NewDisneyPlus/>
      <Originals/>
      <Trending/>
    </div>
  )
}