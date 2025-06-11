import "../styles/header.scss";
import { headerNav } from "../data/header.ts";
import { useDispatch, useSelector } from "react-redux"; 
import { useNavigate } from "react-router-dom";
import { selectUserEmail, selectUserName, selectUserPhoto, setUserLoginDetails } from "../features/userSlice.js";
import { auth, provider } from "../firebase.js";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
   
  const username = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (user: any) => {
      if (user) {
        setUser(user);
         navigate("/home");
      }
    });
        
    return () => unSubscribe();
  }, [dispatch, navigate]);

  const handleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result: any) => {
        setUser(result.user);
        navigate("/");//later change it to home
      })
      .catch((error: any) => {
        alert(error.message);
      });
  }

  const setUser = (user: any) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL
      })
    );
  }

  return (
    <header>
      <div className="logo">
        <img src="/images/logo.svg" alt="Disney" />
      </div>
            
      {!username ? (
        <button className="login-btn" onClick={handleAuth}>
          Login
        </button>
      ) : (
        <>
          <nav>
            {headerNav.map((dta) => {
              const IconComponent = dta.icon;
              return (
                <div key={dta.id} className="nav-item">
                  <IconComponent size={20} />
                  <a href="#" className="nav-link">
                    <p>{dta.txt}</p>
                  </a>
                </div>
              );
            })}
          </nav>
          <img className="user-photo" src={userPhoto} alt={username} />
        </>
      )}
    </header>
  );
}
