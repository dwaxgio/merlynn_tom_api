import React, { useState } from "react";
import ApiForm from "./ApiForm";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === "merlynn" && password === "Merlynn123*") {
      setLoggedIn(true);
    } else {
      setError("Invalid username or password");
    }
  };

  if (loggedIn) {
    return <ApiForm />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></input>
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
      </label>
      <br />
      {error && <div style={{ color: "red" }}>{error}</div>}
      <br />
      <button type="submit">Log in</button>
    </form>
  );
};

export default LoginForm;
