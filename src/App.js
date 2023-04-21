import logo from './logo.svg';
import './App.css';
import ApiForm from './components/ApiForm';
// import dotenv from 'dotenv';
// require('dotenv').config();


function App() {
  // dotenv.config();
  const apikey = process.env.REACT_APP_API_KEY;
  console.log(apikey);
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

        {<ApiForm/>}
      </header>

      {/* <ApiForm/> */}
    </div>
  );
}

export default App;
