import "../styles/header.scss";
import { headerNav } from "../data/header.ts";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUserEmail, selectUserName, selectUserPhoto, setUserLoginDetails } from "../features/userSlice.js";
import { auth, provider } from "../firebase.js";
import { signInWithPopup } from "firebase/auth";


 // In your component
// const navigate = useNavigate();

// // Usage
// navigate('/path'); // Navigate to a path
// navigate(-1); // Go back
// navigate(1); // Go forward
// navigate('/path', { replace: true }); // Replace current entry

export default function Header() {
  const dispatch = useDispatch();
  
 const navigate = useNavigate();

 navigate('/path');  
 navigate(-1); 
 navigate(1);  
 navigate('/path', { replace: true }); 

 const username = useSelector(selectUserName);
 const userEmail = useSelector(selectUserEmail);
 const userPhoto = useSelector(selectUserPhoto);

  const handleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result: any) => {
        setUser(result.user);
      })
      .catch((error: any) => {
        alert(error.message);
      });
  }

  const setUser = (user:any) =>{
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL

      })
    )
  }

  return (
    <header>
      <div className="logo">
        <img src="/images/logo.svg" alt="logo" />
      </div>
            
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
            
      <button className="login-btn" onClick={handleAuth}>
        Login
      </button>
    </header>
  );
}
