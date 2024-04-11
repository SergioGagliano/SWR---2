import "./App.css";
import { Link } from "react-router-dom";

function App() {
 
  return (
    <>
      <h1>Benvenuto nella Home Page</h1>
      <Link to="/user">Avvia il fetch dei dati</Link>
    </>
  );
}

export default App;
