import { useContext, useState } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const Login = () => {

  const [inputs,setInputs] = useState({
    username:"",
    password:"",
  })

  const [error,setError] = useState(null)

  const {login} = useContext(AuthContext)

  const handleLogin = async (e)=>{
    e.preventDefault()
    try{
      await login(inputs)
      navigate("/")
    } catch (err){
      setError(err)
    }
  }
  console.log(inputs)

  console.log(error)

  const handleChange = (e)=>{
    setInputs((prev)=>({...prev,[e.target.name]:e.target.value}))
  }

  const navigate = useNavigate()



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
            <input type="text" placeholder="Username" name="username" onChange={handleChange}/>
            <input type="password" placeholder="Password" name="password" onChange={handleChange}/>
            {/**{error && error } */}
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
