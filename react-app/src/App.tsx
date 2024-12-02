import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/index";
import Actor from "./pages/actor";
import Payment from "./pages/payment";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/actors" element={<Actor />} />
        <Route path="/payments" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
