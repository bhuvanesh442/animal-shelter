import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
//import Footer from './components/Footer';
import './components/Footer.css';
function App() {

  return (
    <BrowserRouter>
     <Routes> 
          <Route path="/" element={<Header/>} />
     </Routes>
    </BrowserRouter>
   
  );
}

export default App;
