import { useContext, useRef } from "react";
import "./login.css"
import { LoginCall } from "../../ApiCalls";
import { AuthContext } from "../../context/AuthContext";
import CircularProgress from '@mui/material/CircularProgress';

export default function Login() {

    const email = useRef();
    const password = useRef();
    const { user, isFetching, error, dispatch} = useContext(AuthContext);

    const handleClick = (e) => {

        e.preventDefault();
        LoginCall({ email: email.current.value ,password: password.current.value }, dispatch);
    }

    console.log(user);
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Swafsocial</h3>
                <span className="loginDesc">
                    Connect with nakama and meet new people from around the world.
                </span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={handleClick}>
                    <input required placeholder="Email" type="email" className="loginInput" ref={email} />
                    <input required placeholder="Password" type="password" className="loginInput" ref={password} minLength={6} />
                    <button className="loginButton" type="submit" disabled={isFetching} >{isFetching ? <CircularProgress size="20px" /> : "login"}</button>
                    <span className="loginForgot">Forgot password?</span>
                    <button className="loginRegisterButton">
                    {isFetching ? <CircularProgress size="20px" /> : "  Get started"}
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}
