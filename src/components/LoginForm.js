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
        {/* Username: */}

        <input
          class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="username"
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </label>
      <br />
      <label>
        {/* Password: */}
        <input
          class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="password"
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
      {/* <button type="submit">Log in</button> */}
      <button
        type="submit"
        class="px-4 py-1 text-sm text-blue-600 font-semibold rounded-full border border-blue-200 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 "
      >
        Log in
      </button>
    </form>
  );
};

export default LoginForm;
