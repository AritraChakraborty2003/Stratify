import Header1 from "./Header1";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer1 from "./Footer1";
import { Link } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/usersAPI")
      .then((res) => {
        setData(res.data.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const flag = true;
  console.log(data);
  const handleLogin = (e) => {
    e.preventDefault();

    //Signup Authetication code/Logic for backend extension
    {
      data.map((val) => {
        if (val.email === email && val.password === password) {
          localStorage.setItem("admin", "#12356");
          navigate("/dashboard", {
            state: {
              name: val.name,
            },
          });
          flag = false;
        }
      });
    }
    if (!flag) {
      alert("Incorrect Username/Password");
    }
  };

  return (
    <>
      <Header1 />
      <div className="w-12/12   flex justify-center items-center p-10">
        <div className="form-area border-blue1 border-2 w-[98vw] md:w-[80vmin] ">
          <div className="flex flex-col justify-center items-center imgHolder h-20 w-12/12 bg-blue1 text-white">
            <p className="text-2xl font-bold ">Login</p>
            <span className="text-md">(Login into your Fashion account)</span>
          </div>

          <form className="p-3">
            <input
              type="email"
              name="email"
              placeholder="Enter Email..."
              value={email}
              className="shadow-xl p-2 w-[76vmin]"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
            <br />
            <br />
            <input
              type="text"
              name="password"
              placeholder="Enter Password..."
              value={password}
              className="shadow-xl p-2 w-[76vmin]"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <br></br>
            <br></br>

            <br></br>

            <br></br>
            <a href="/Signup">Don't Have an account?</a>

            <div className="btnHolder flex justify-center items-center mt-3">
              <button
                type="submit"
                className="mt-3 p-2 w-24 bg-blue1 text-white hover:bg-blue-700 "
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer1 />
    </>
  );
};
export default Login;
