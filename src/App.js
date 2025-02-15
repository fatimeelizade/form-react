import './App.css'
import Header from './components/header';
import Form from "./components/form"
import Students from "./components/students";  
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header /> } >
          <Route index element={<Form />} />
          <Route path="students" element={<Students />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
}


export default App;


