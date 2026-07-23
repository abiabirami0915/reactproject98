import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Books from "./pages/Books";
import Authors from "./pages/Authors";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;