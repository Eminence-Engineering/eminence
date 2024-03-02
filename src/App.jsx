// react
import { Routes, Route } from "react-router-dom";

// styles
import "./App.css";

// components
import Home from "./pages/Home";
import About from "./pages/About";
import Solution from "./pages/Solution";
import Faqs from "./pages/Faqs";
import Error from "./pages/Error";

function App() {
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/solutions" element={<Solution />} />
      <Route path="/faqs" element={<Faqs />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;

