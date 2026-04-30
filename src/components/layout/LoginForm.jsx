"use client";

import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import { Eye, EyeSlash } from "react-bootstrap-icons";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className={styles.form}>
      <h1 className={styles.heading}>Login</h1>

      {/* Email */}
      <input
        type="text"
        placeholder="Enter email"
        className={styles.input}
      />

      {/* Password with eye */}
      <div className={styles.passwordWrapper}>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter password"
          className={styles.input}
        />

        <span onClick={() => setShowPassword(!showPassword)}>
  {showPassword ? <EyeSlash /> : <Eye />}
</span>
      </div>

      {/* Forgot password */}
      <div className={styles.forgotWrapper}>
        <a href="#" className={styles.forgot}>
          Forgot password?
        </a>
      </div>

      {/* Button */}
      <button className={styles.btn}>Login</button>
    </form>
  );
};

export default LoginForm;