import NavBar from "./components/Navbar";
import Card from "./components/Card";
import {useState} from 'react';
function App() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <NavBar counter={counter}></NavBar>
      <Card incrementCounter={setCounter}></Card>
    </>
  );
}

export default App;
