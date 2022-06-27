import "./register.css"

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">LucasSocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on LucasSocial.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" name="" id="" className="loginInput"/>
            <input placeholder="E-mail" name="" id="" className="loginInput"/>
            <input type="password" placeholder="Password" name="" id="" className="loginInput"/>
            <input type="password" placeholder="Password again" name="" id="" className="loginInput"/>
            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton">
              Log into Account
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
