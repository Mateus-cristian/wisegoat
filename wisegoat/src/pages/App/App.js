import Response from "../Response";
import Home from "../Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/response" element={<Response />} />
      </Routes>
    </Router>
  );
}

export default App;
