import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import Footer from "./shared-components/Footer";


function App() {
  return (
    <div className="flex flex-col min-h-screen">
    <main className="flex-grow">
    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero/>}/>
      </Routes>
      </BrowserRouter>
      
    </main>
    <Footer />
  </div>
  );
}

export default App;
