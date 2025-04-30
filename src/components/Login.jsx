// src/components/Login.jsx
import React from 'react';
import styles from './Login.module.css';

const Login = () => {
  return (
    <section className={styles.loginSection} id="login">
      <div className={styles.loginBox}>
        <h2>Login</h2>
        <form className={styles.form}>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Log In</button>
        </form>
        <p className={styles.linkText}>
          Don't have an account? <a href="#">Sign Up</a>
        </p>
      </div>
    </section>
  );
};

export default Login;
