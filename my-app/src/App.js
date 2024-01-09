
//const logo =require ("./logo.svg");
//const app =require ("./App.css");
import './App.css';

let name = "Shivam, Gauri, Anurag";
function App() {
  return (
  <>
  <nav>
    <li>HOME</li>    
    <li>ABOUT</li>   
    <li>HELP</li>   

    <div className = "first">
      <h1>Hello {name}</h1>
    </div>
  </nav>
  </>
  );
}

export default App;
