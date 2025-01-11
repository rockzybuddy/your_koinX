import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import DashBoard from "./pages/DashBoard";

function App() {
  return (
    <div className="bg-[#33376cef] min-h-screen">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<DashBoard/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
