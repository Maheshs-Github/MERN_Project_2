import React from "react";
import "./CSS/LoginSignUp.css";
import { useState } from "react";
import { useRef } from "react";

const LoginSignUp = () => {
  //
  //
  // login In Function
  const Login = async () => {
    let LoginData = {
      email: email.current.value,
      password: password.current.value,
    };
    console.log("Login Data: ", LoginData);
    try {
      const AddLData = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(LoginData),
      });
      const resLData = await AddLData.json();
      if (resLData.success) {
        console.log("Res: ", resLData.message);
        alert(resLData.message);
        localStorage.setItem("auth-token", resLData.token);
        window.location.replace("/");
        email.current.value = "";
        password.current.value = "";
      } else {
        alert(resLData.message);
      }
    } catch (err) {
      console.log("Error: ", err);
      alert("there is been some error");
    }
  };

  //
  //
  // Sign Up Function
  const SignUp = async () => {
    let SignUpData = {
      name: name.current.value,
      email: email.current.value,
      password: password.current.value,
    };
    console.log("Sign Up Data: ", SignUpData);

    try {
      const AddSData = await fetch("http://localhost:4000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(SignUpData),
      });
      const resSData = await AddSData.json();
      if (resSData.success) {
        console.log("Mesage: ", resSData.message);
        alert(resSData.message);
        localStorage.setItem("auth-token", resSData.token);
        window.location.replace("/");
        email.current.value = "";
        password.current.value = "";
        name.current.value = "";
      } else {
        alert(resSData.message);
      }
    } catch (err) {
      console.log("Error: ", err);
      alert("there is been some error");
    }
  };
  const [State, setState] = useState("Login");
  // const [Loading,setLoading]=useState(false)

  const name = useRef();
  const email = useRef();
  const password = useRef();

  return (
    <div className="Sign-Base-Outter">
      <div className="Sign-Base">
        {State === "Sign-Up" ? <h2>Sign Up</h2> : <h2>Log In</h2>}
        {State === "Sign-Up" ? (
          <input type="text" name="Name" placeholder="Enter Name" ref={name} />
        ) : null}
        <input
          type="email"
          name="Email"
          id="Email"
          placeholder="Enter Email Address"
          ref={email}
        />
        <input
          type="password"
          name="Password"
          id="Password"
          placeholder="Enter Password"
          ref={password}
        />
        <button
          className="btn btn-outline-danger"
          onClick={State === "Sign-Up" ? SignUp : Login}
        >
          Submit
        </button>
        <div className="P_Text">
          {State === "Sign-Up" ? (
            <p>
              Already have an Account?{" "}
              <b
                onClick={() => {
                  setState("Login");
                }}
              >
                Login Here
              </b>
            </p>
          ) : (
            <p>
              Create an Account?{" "}
              <b
                onClick={() => {
                  setState("Sign-Up");
                }}
              >
                Click Here
              </b>
            </p>
          )}
          {/* <p>
            <input type="checkbox" name="c1" /> By Continiuing, I agree to the
            terms of use & private policy
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
