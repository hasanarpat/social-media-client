import { useState } from "react";
import "./register.scss";
import { Link } from "react-router-dom";
import axios from "axios"

const Register = () => {

  const [inputs,setInputs] = useState({
    username:"",
    email:"",
    password:"",
    name:"",
  })
  const [error,setError] = useState(null)

  const handleChange = (e)=>{
    setInputs((prev)=>({...prev,[e.target.name]:e.target.value}))
  }

  const handleClick = async e =>{
    e.preventDefault()

    try{
      await axios.post("http://localhost:3001/api/auth/register",inputs)
    } catch (err){
      setError(err.response.data)
    }
  }

  console.log(inputs)
  console.log(error)

  return (
    <div className="register">
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
          <span>Do you have an account?</span>
          <Link to="/login">
            {" "}
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" name="username" onChange={handleChange}/>
            <input type="email" placeholder="Email" name="email" onChange={handleChange}/>
            <input type="password" placeholder="Password" name="password" onChange={handleChange}/>
            <input type="text" placeholder="Name" name="name" onChange={handleChange}/>
            { error && error}
            <button onClick={handleClick}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
