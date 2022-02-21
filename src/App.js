import {Search} from "./components/Seacrh.jsx"
import './App.css';
import { Seacrhpage } from "./components/Searchpage.jsx";
import {Routes, Route} from "react-router-dom";
import {Searchdetail} from './components/Searchdetailpage.jsx'
function App() {
  return (
    <div className="App">
 
  
    <Routes>
      <Route path="/" element={<Search/>}/>
      <Route path="/search" element={<Seacrhpage/>}/>
      <Route path="/page/:id" element={<Searchdetail/>}/>
    </Routes>
    </div>
  );
}

export default App;
