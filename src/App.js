import logo from "./logo.svg";
import "./App.css";
import ApiForm from "./components/ApiForm";
import LoginForm from "./components/LoginForm";
import TailwindcssFundamentals from "./components/TailwindcssFundamentals";
import Footer from "./components/Footer";
import merlynnlogo from "./MERLYNN_LOGO.png";

function App() {
  return (
    <div className="flex flex-col min-h-screen justify-center">
      <div className="relative">
        <img
          src={merlynnlogo}
          alt="Merlynn"
          className="w-15 h-10 absolute top-10 right-10"
        />
      </div>

      {/* Main content */}
      <div className="flex-grow bg-custom flex items-center justify-center">
        <div className="p-6 max-w-lg w-full mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 justify-center text-center">
          <LoginForm />
          {/* <ApiForm /> */}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
