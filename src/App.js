import './App.css';
import { Route, Routes} from "react-router-dom"
import Home from './Pages/Home';
import Bookshelf from './Pages/Bookshelf';
import Portfolio from './Pages/Portfolio';



function App() {
  return (
    <div>
   <Routes>
    <Route path="/" element={<Home/>}> </Route>
    <Route path="/Bookshelf" element={<Bookshelf/>}> </Route>
    <Route path="/Portfolio" element={<Portfolio/>}> </Route>
   </Routes>
  </div>
  );
}

export default App;
