import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
