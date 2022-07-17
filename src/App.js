import logo from './logo.svg';
import './App.css';

function App() {
  let i = 0;
  let a = "hola";
  var x = 3;
  const y = 1;
  let arreglo = [1,2,3,4];
  arreglo.forEach((numero)=>{
    console.log(numero)
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p >
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Hola aqui estoy
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
