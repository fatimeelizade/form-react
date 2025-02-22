import './App.css'
import Header from './components/header';
import Form from "./components/form"
import Students from "./components/students";  
import Teachers from "./components/teachers";  
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

function App() {
  return <div>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header /> } >
          <Route index element={<Form />} />
          {/* <Route path="students" element={<Students />} />
          <Route path="teachers" element={<Teachers />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  </div>
}


export default App;


