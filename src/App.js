import "./App.css";
import CTA from "./CTA";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CTA>
          <h1>This is an important CTA</h1>
          <button>Click me now or you'll miss out!</button>
        </CTA>
        <br />
        <CTA>
          <form>
            <input type="email" placeholder="Enter email address here" />
            <br />
            <button>Submit</button>
          </form>
        </CTA>
      </header>
    </div>
  );
}

export default App;
