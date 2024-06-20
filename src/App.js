import logo from './logo.svg';
import './App.css';

function App(props) {
  const subject='React'
  console.log(props);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hello
        </p>
        <p>
          {subject}
        </p>
      </header>
    </div>
  );
}

export default App;
