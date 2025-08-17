// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* ✅ Public Home Page */}
        <Route path="/" element={<Home />} />

        {/* ✅ Public Login Page */}
        <Route path="/login" element={<Login />} />

        {/* 🔐 Protected Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* ❌ Catch-all for unknown routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;