import "./register.css"


export default function Register() {
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
                <div className="registerBox">
                    <input placeholder="Username" className="registerInput" />
                    <input placeholder="Email" className="registerInput" />
                    <input placeholder="Password" className="registerInput" />
                    <input placeholder="Enter your password again" className="registerInput" />
                    <button className="registerButton">Sign up</button>
                    <button className="registerRegisterButton">
                        Log into your Account
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
