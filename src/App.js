import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Footer from "./Footer";
import './input.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 class="text-3xl font-bold underline">
          <Nav />
        </h1>
      </header>
      <Routes>
        <Route path ="/" element={<Home/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
