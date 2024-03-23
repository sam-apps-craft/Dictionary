import logo from "./logo.png";
import logo2 from "./logo2.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img
            src={logo}
            className="App-logo img-fluid"
            alt="logo"
            rel="noreferrer"
          />
        </header>

        <main>
          <Dictionary defaultKeyword="start-up" />
        </main>
        <footer className="App-footer text-center">
          <p className="footer">
            <a
              href="https://www.apps-craft.com/"
              target="blank"
              rel="noreferrer"
            >
              <img
                src={logo2}
                className="App-logo-footer img-fluid rounded"
                alt="logo2"
                rel="noreferrer"
              />
            </a>
            <br />
            Coded by Samantha Raymond and is open-sourced on{" "}
            <a
              href="https://github.com/sam-apps-craft/Dictionary"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            hosted on{" "}
            <a
              href="https://dictionary-app-apps-craft.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify.
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
