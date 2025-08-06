import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Student from "./pages/Student";
import Sponsor from "./pages/Sponsor";
import Admin from "./pages/Admin";
import WalletConnect from "./components/WalletConnect";

function App() {
  return (
    <div>
      <header className="flex justify-between items-center px-6 py-4 bg-gray-800 text-white">
        <h1 className="text-xl font-bold">EduYield</h1>
        <nav className="flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/student">Student</Link>
          <Link to="/sponsor">Sponsor</Link>
          <Link to="/admin">Admin</Link>
        </nav>
        <WalletConnect />
      </header>

      <main className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student" element={<Student />} />
          <Route path="/sponsor" element={<Sponsor />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
