import "../styles/details.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { Play, CirclePlus } from "lucide-react";

function Details(){
  const { id } = useParams<{ id: string }>();
  const [details, setDetails] = useState<any>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovieDetails = async () => {
      if (!id) {
        console.error("No movie ID provided");
        setLoading(false);
        return;
      }

      try {
        const docRef = doc(db, "movies", id);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          setDetails(docSnap.data());
        } else {
          console.log("No such document in firebase 🔥!");
        }
      } catch (error) {
        console.error("Error getting document:", error);
      } finally {
        setLoading(false);
      }
    };

    getMovieDetails();
  }, [id]);

  if (loading) {
    return <div>Loading movie details...</div>;
  }

  if (!id) {
    return <div>Error: No movie ID provided</div>;
  }

  return(
    <div className="details-container">
      <div className="background">
        <img src={details.backgroundImg || "https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/06/scale.jpg"} alt="background" />
      </div>
      <div className="image-title">
        <img src={details.titleImg || "https://image.tmdb.org/t/p/original/h40hblm8J1if7T2CBMjCD85HwuD.png"} alt="title" />
      </div>
      <div className="contentMeta">
        <div className="controls">
          <div className="player">
            <Play color="black" size={30} />
            <span>Play</span>
          </div>
          <div className="trailer">
            <Play color="white" size={30} />
            <span>Trailer</span>
          </div>
          <div className="addList">
            <CirclePlus color="white" size={66} />
          </div>
          <div className="groupList">
            <img src="/images/group-icon.png" alt="group" />
          </div>
        </div>
        <div className="subTitle">
          {details.subTitle || "2018 - 7m - Family, Fantasy, Kids, Animation"}
        </div>
        <div className="description">
          {details.description || "When the Queen of Arendelle, Elsa, accidentally uses her powers to create a curse that traps the kingdom in an eternal winter, her sister Anna sets off on a journey with a rugged ice harvester, Kristoff, his loyal reindeer Sven, and a naive snowman named Olaf to find Elsa and save their kingdom. Along the way, they face challenges, discover the true meaning of love and friendship, and learn that Elsa's powers are not a curse but a gift. Their adventure leads them to the realization that love is the key to breaking the curse and restoring summer to Arendelle."}
        </div>
      </div>
    </div>
  )
}

export default Details;
