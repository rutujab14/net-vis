import "./App.css";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import NetworkVisualizer from "./components/NetworkVisualizer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FaqPage from "./components/FaqPage";

function App() {
  return (
    <BrowserRouter basename="/net-vis">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/network-visualizer" element={<NetworkVisualizer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
