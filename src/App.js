import logo from "./logo.png";
import logo2 from "./logo2.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>

        <main>
          <Dictionary defaultKeyword="house" />
        </main>
        <footer className="App-footer text-center">
          <p className="">
            Coded by{" "}
            <a href="https://www.apps-craft.com/" target="blank">
              <img
                src={logo2}
                className="App-logo-footer img-fluid rounded"
                alt="logo2"
              />
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
