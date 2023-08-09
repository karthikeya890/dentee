import "./Register.css";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import doctors from "../../images/dentee.jpg";
const Register = () => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
  });
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const onRegisterHandler = async (e) => {
    e.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    };

    const response = await fetch("http://localhost:3006/signUp", options);

    if (!response.ok) {
      const errorMsg = await response.json();
      alert(errorMsg.error);
    } else {
      const data = await response.json();
      alert(data.message);
    }
    setDetails({
      name: "",
      email: "",
    });
  };

  const onChangeNameHandler = (event) => {
    setDetails((prevState) => ({
      ...prevState,
      name: event.target.value,
    }));
    event.target.value === "" ? setNameError(true) : setNameError(false);
  };

  const nameInputHandler = () => (
    <>
      <label>Name :</label>
      <input
        value={details.name}
        onChange={onChangeNameHandler}
        className="input"
        placeholder="Enter your Name"
        type="text"
      />
      {nameError && <p className="error-msg">Please Enter Valid Name*</p>}
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

  const registerNowHandler = () => (
    <button
      style={{
        pointerEvents: !nameError && !emailError !== "" ? "auto" : "none",
        opactiy: !nameError && !emailError !== "" ? 1 : 0.5,
      }}
      className="form-button"
      type="submit"
    >
      Register Now
    </button>
  );

  const alreadyMember = () => {
    return (
      <div className="already-member">
        <p className="already-member-p">Already a dentee member ? </p>
        <button type="button" className="sign-up-btn">
          <Link to="/login">Sign In</Link>
        </button>
      </div>
    );
  };

  return (
    <>
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
              <form onSubmit={onRegisterHandler} className="form-container">
                <h2 className="heading">Registration </h2>
                {nameInputHandler()}
                {emailInputHandler()}
                {registerNowHandler()}
                {alreadyMember()}
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Register;
