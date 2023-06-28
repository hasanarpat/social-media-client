import { useContext } from "react";
import "./login.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const Login = () => {

  const {login} = useContext(AuthContext)

  const handleLogin = ()=>{
    login();
  }
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Aliqua eu sunt et sit officia eiusmod quis est adipisicing fugiat.
            Sunt elit ea aute officia aliqua. Ipsum sint aliqua id irure elit
            qui eiusmod nostrud est aliqua. Cillum laboris duis sit in
            reprehenderit veniam esse duis nostrud duis ex excepteur in eiusmod.
            Ea laboris quis labore id do eiusmod amet ipsum exercitation
            consequat dolore.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            {" "}
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
