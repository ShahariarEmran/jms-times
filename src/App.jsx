import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Reporter from "./pages/Reporter";
import NewsArticlePage from "./pages/NewsArticlePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reporter" element={<Reporter />} />
          <Route path="/news" element={<NewsArticlePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
