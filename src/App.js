import logo from './logo.svg';
import './App.css';
import {Link}  from './components/Link/Link';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and savvvve to reload.
        </p>
        <p>Hello! word</p>
      <Link link="https://reactjs.org" text="Link to react.org" />
      <Link link="https://reactjs.org" text="Link to google" />
         
      </header>
    </div>
  );
}

export default App;
