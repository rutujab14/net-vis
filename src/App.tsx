import "./App.css";
import HomePage from "./components/HomePage";
import NetworkVisualizer from "./components/NetworkVisualizer";
import { HashRouter, Routes, Route } from "react-router-dom";
import FaqPage from "./components/FaqPage";

function App() {
  return (
    <HashRouter basename="/net-vis">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/network-visualizer" element={<NetworkVisualizer />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
