import "./Login.css";
import "react-phone-input-2/lib/style.css";
import { useState, useEffect } from "react";
import logo from "../../images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import doctors from "../../images/dentee.jpg";
import Cookies from "js-cookie";
const Login = () => {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = useState(false);

  const nagivate = useNavigate();

  const onLoginHander = async (e) => {
    e.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    };

    const response = await fetch("http://localhost:3006/signIn", options);

    if (!response.ok) {
      const errorData = await response.json();

      alert(errorData.error);
    } else {
      const data = await response.json();

      console.log(data);
      Cookies.set("jwtToken", data.jwt_Token, { expires: 1 });

      nagivate("/Services", { replace: true });
    }

    setDetails({
      email: "",
      password: "",
    });
  };

  const onChangePasswordHandler = (event) => {
    setDetails((prevState) => ({
      ...prevState,
      password: event.target.value,
    }));
  };

  const passwordHandler = () => (
    <>
      <label>Password :</label>
      <input
        value={details.password}
        onChange={onChangePasswordHandler}
        className="input"
        placeholder="Enter your Password"
        type="password"
      />
    </>
  );

  const onChangeEmailHandler = (event) => {
    setDetails((prevState) => ({
      ...prevState,
      email: event.target.value,
    }));
    event.target.value.endsWith("@gmail.com")
      ? setEmailError(false)
      : setEmailError(true);
  };

  const emailInputHandler = () => (
    <>
      <label>Email :</label>
      <input
        value={details.email}
        onChange={onChangeEmailHandler}
        className="input"
        placeholder="Example@gmail.com"
        type="text"
      />
      {emailError && <p className="error-msg">Please Enter Valid Email*</p>}
    </>
  );

  const loginButtonHandler = () => (
    <button
      style={{
        pointerEvents:
          details.password !== "" && !emailError !== "" ? "auto" : "none",
        opactiy: details.password !== "" && !emailError !== "" ? 1 : 0.5,
      }}
      className="form-button"
      type="submit"
    >
      Login
    </button>
  );

  const notMemberHandler = () => {
    return (
      <div className="already-member">
        <p className="already-member-p">Not a dentee member ? </p>
        <button type="button" className="sign-up-btn">
          <Link to="/register">Sign Up</Link>
        </button>
      </div>
    );
  };

  return (
    <div className="container-fluid p-0">
      <header className="header-container">
        <img src={logo} alt="Dentee-logo" />
      </header>

      <main className="container-fluid p-5">
        <div className="row">
          <div className="col-md-6 p-0 d-flex justify-content-center justify-content-md-end align-items-center ">
            <img className="doctors-img" src={doctors} alt="Doctors-img" />
          </div>
          <div className="col-md-6 p-0 d-flex justify-content-center justify-content-md-start align-items-center ">
            <form onSubmit={onLoginHander} className="form-container">
              <h2 className="heading">Login</h2>
              {emailInputHandler()}
              {passwordHandler()}
              {loginButtonHandler()}
              {notMemberHandler()}
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
