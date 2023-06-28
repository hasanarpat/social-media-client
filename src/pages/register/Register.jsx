import "./register.scss";
import { Link } from "react-router-dom";

const Register = () => {
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
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
