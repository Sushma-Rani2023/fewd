import './App.css';
import Form from './Form';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Info from './Info';


function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route path="/" element={<Form/>}></Route>
      <Route path="/info" element={<Info/>}></Route>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
