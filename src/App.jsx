import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Blog from "./pages/blog";
import Resources from "./pages/resources";
import Whoami from "./pages/whoami";

function App() {
  return (
    <div className="app">
      <div className="bg-img"></div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/whoami" element={<Whoami />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
