import React from "react";
import { useState } from "react";
import Button from "../Button/Button";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setLoginData((prevLoginData) => ({
      ...prevLoginData,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.form}>
        <label>Email: </label>
        <input
          id="email"
          type="text"
          name="email"
          value={loginData.email}
          onChange={handleChange}
          placeholder="email..."
        ></input>
        <label>Password: </label>
        <input
          id="password"
          type="password"
          name="password"
          value={loginData.password}
          onChange={handleChange}
          placeholder="password..."
        ></input>
        <Button>Login</Button>
      </form>
    </div>
  );
};

export default LoginForm;
