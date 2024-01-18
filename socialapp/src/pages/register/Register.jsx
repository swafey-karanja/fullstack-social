import { useRef } from "react"
import "./register.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import CircularProgress from '@mui/material/CircularProgress';


export default function Register() {

    const username = useRef();
    const email = useRef();
    const password = useRef();  
    const passwordAgain = useRef();
    const navigate = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();

        if (passwordAgain.current.value !== password.current.value) {
            passwordAgain.current.setCustomValidity("Try again!");

        }else{
            const user = {
                username : username.current.value,
                email : email.current.value,
                password : password.current.value,
            };
            try {
                await axios.post("/auth/register", user);
                navigate("/login");
            } catch (error) {
                console.log(error);
            }
            
        }
    };
    
  return (
    
    <div className="register" >
       <div className="registerWrapper">
            <div className="registerLeft">
                <h3 className="registerLogo">Swafsocial</h3>
                <span className="registerDesc">
                    Connect with nakama and meet new people from around the world.
                </span>
            </div>
            <div className="registerRight">
                <form className="registerBox" onSubmit={handleClick}>
                    <input placeholder="Username" required ref={username} className="registerInput" />
                    <input placeholder="Email" type="email" required ref={email} className="registerInput" />
                    <input placeholder="Password" type="password" minLength="6" required ref={password} className="registerInput" />
                    <input placeholder="Enter your password again" type="password" minLength="6" required ref={passwordAgain} className="registerInput" />
                    <button className="registerButton" type="submit"  >Sign up</button>
                    <button className="registerRegisterButton">
                        Log into your Account
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}
