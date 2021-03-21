import React, { useState } from "react";
import './App.css';

import FormResult from "./components/Results";

function App() {
  const [firstName, setFirstName] = useState("");
  const [firstNameValidation, setFirstNameValidation] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameValidation, setLastNameValidation] = useState("");
  const [email, setEmail] = useState("");
  const [emailValidation, setEmailValidation] = useState("");
  const [password, setPassword] = useState("");
  const [passwordValidation, setPasswordValidation] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [confirmPasswordValidation, setconfirmPasswordValidation] = useState("");
  
  
  function validateFirstName(text) {
    if (text.length <= 2) {
      setFirstNameValidation("First Name must be at least 2 characters.");
    } else {
      setFirstNameValidation("");
    }
  }

  function validateLastName(text) {
    if (text.length <= 2) {
      setLastNameValidation("Last Name must be at least 2 characters.");
    } else {
      setLastNameValidation("");
    }
  }

  function validateEmail(text) {
    if(text.length <= 5) {
      setEmailValidation("Email must be at least 5 characters.");
    } else {
      setEmailValidation("");
    }
  }
  function validatePassword(text) {
    if(text.length <= 8) {
      setPasswordValidation("Password must be at least 8 characters.");
    } else {
      setPasswordValidation("");
    }
  }
  function validateconfirmPassword(text) {
    if(text.length <= 8) {
      setconfirmPasswordValidation("Password and Password Confirmation must be matched.");
    } else {
      setconfirmPasswordValidation("");
    }
  }


  // const [state, setState] = useState({
  //   firstName:"",
  //   lastName: "",
  //   email: "",
  //   password: "",
  //   confirmPassword: ""
  // });

  return (
    <div>
      <form>
        <div>
          <label>First Name:</label>
          <p>{firstNameValidation}</p>
          <input
            onChange={(event) => {
              setFirstName(event.target.value);
              validateFirstName(event.target.value);
            }}
            type="text"
          />
        </div>
        <div>
          <label>Last Name:</label>
          <p>{lastNameValidation}</p>
          <input
            onChange={(event) => {
              setLastName(event.target.value);
              validateLastName(event.target.value);
            }}
            type="text"
          />
        </div>
        <div>
          <label>Email:</label>
          <p>{emailValidation}</p>
          <input
            onChange={(event) => {
              setEmail(event.target.value);
              validateEmail(event.target.value);
            }}
            type="text"
          />
        </div>
        <div>
          <label>Password:</label>
          <p>{passwordValidation}</p>
          <input
            onChange={(event) => {
              setPassword(event.target.value);
              validatePassword(event.target.value);
            }}
            type="text"
          />
        </div>
        <div>
          <label>Password Confirmation:</label>
          <p>{confirmPasswordValidation}</p>
          <input
            onChange={(event) => {
              setconfirmPassword(event.target.value);
              validateconfirmPassword(event.target.value);
            }}
            type="text"
          />
        </div>
      </form>

      <FormResult firstName={firstName} lastName={lastName} email={email} password={password} confirmPassword={confirmPassword}/>
    </div>
  );
}

export default App;

    // <div className="App">
      
    //   <Form inputs={state} setInputs={setState} /> 
    //   <Results inputs={state} />
    
    //     <div>
    //         <h2>Your Form Data</h2>
    //         <p>First Name: {firstName}</p>
    //         <p>Last Name: {lastName}</p>
    //         <p>Email: {email}</p>
    //         <p>Password: {password}</p>
    //         <p>Confirm Password: {confirmPassword}</p>

    //     </div>

    //   <input type="submit" value="Create User" />

    // </div>

  