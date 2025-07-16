import "../styles/home.scss";
import { ImageSlider } from "../components/ImageSlider.tsx";
import { Viewers } from "./Viewers.tsx";
import { Recommended } from "./Recommended.tsx";
import { NewDisneyPlus } from "./NewDisneyPlus.tsx";
import { Originals } from "./Originals.tsx";
import { Trending } from "./Trending.tsx";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import db from "../firebase.js";
import { setMovies } from "../features/movie/movieSlice.js";
import { collection, onSnapshot } from "firebase/firestore";

type MovieData = {
  id: string;
  type: string;
  [key: string]: any;
};

export function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "movies"), 
      (snapshot) => {
        const moviesByType = {
          recommend: [] as MovieData[],
          newDisney: [] as MovieData[],
          trending: [] as MovieData[],
          original: [] as MovieData[]
        };

        snapshot.docs.forEach((doc) => {
          const data = doc.data();
          const movieData: MovieData = { id: doc.id, type: data.type || '', ...data };

          switch (data.type) {
            case "recommend":
              moviesByType.recommend.push(movieData);
              break;
            case "new":
              moviesByType.newDisney.push(movieData);
              break;
            case "trending":
              moviesByType.trending.push(movieData);
              break;
            case "original":
              moviesByType.original.push(movieData);
              break;
            default:
              console.log("Unknown movie type:", data.type);
              break;
          }
        });

        console.log("Dispatching movies:", moviesByType);
        dispatch(setMovies(moviesByType));
      },
      (error) => {
        // Optional: Add error handling
        console.error("Error fetching movies:", error);
      }
    );

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div className="home">
      <ImageSlider />
      <Viewers />
      <Recommended 
        header="Recommended for you"
        sectionClass="recommended"
        divClass="recommended-item"
      />
      <NewDisneyPlus />
      <Originals />
      <Trending />
    </div>
  );
}
