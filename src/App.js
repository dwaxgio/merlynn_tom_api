import logo from "./logo.svg";
import "./App.css";
import ApiForm from "./components/ApiForm";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

        {/* {<ApiForm />} */}

        {/* <h1>Login Form</h1> */}
        <LoginForm />
      </header>
    </div>
  );
}

export default App;
