import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    const response = await actions.register(email, password);
    if (response) {
      console.log(response);
      navigate("/login");
    }
  };

  return (
    <div className="mt-5">
      <form className="cointainer card" onSubmit={handleSubmitRegister}>
        <div className="card-body">
          <h2 className="text-center">Register</h2>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              value={email}
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <hr className="my-5" />
          <Link to="/login">Posees una cuenta? haz click aqui</Link>
        </div>
      </form>
    </div>
  );
};
