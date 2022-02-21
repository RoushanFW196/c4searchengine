import {Search} from "./components/Seacrh.jsx"
import './App.css';
import { Seacrhpage } from "./components/Searchpage.jsx";
import {Routes, Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
 
  
    <Routes>
      <Route path="/" element={<Search/>}/>
      <Route path="/search" element={<Seacrhpage/>}/>
    </Routes>
    </div>
  );
}

export default App;
