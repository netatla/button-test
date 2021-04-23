/* eslint-disable no-restricted-globals */
import "./App.css";

const function1 = () => window.close();

const function2 = () => {
  this.focus();
  self.opener = this;
  self.close();
};

const function3 = () => {
  window.focus();
  window.opener = this;
  window.close();
};

const function4 = () => {
  window.opener = null;
  window.open("", "_self");
  window.close();
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={function1}>Close 1</button>
        <br />
        <button onClick={function2}>Close 2</button>
        <br />
        <button onClick={function3}>Close 3</button>
        <br />
        <button onClick={function4}>Close 4</button>
        <br />
        <a
          style={{ color: "white" }}
          href="https://netatla.github.io/button-test/"
        >
          https://netatla.github.io/button-test/
        </a>
      </header>
    </div>
  );
}

export default App;
