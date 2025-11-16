import { useState } from "react";
import "./App.css";
import Projects from "./components/Projects";
import ProjectLists from "./components/ProjectLists";
import Admin from "./components/Admin/Admin";
import Home from "./components/Home";
import Header from "./components/Nav/Header";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import AdminDashboard from "./components/Admin/AdminDashboard";
import AdminLogin from "./components/Admin/AdminComponents/AdminLogin";

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

function MainLayout() {
  const location = useLocation();
  const isAdminRoute =
    location.pathname.startsWith("/admin-login") ||
    location.pathname.startsWith("/admin-dashboard");


  return (
    <>
      {/* Show Header ONLY if not admin route */}
      {!isAdminRoute && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Admin Section */}
        <Route path="/admin-login" element={<AdminLogin/>} />

        {/* Admin Dashboard */}
        <Route path="/admin-dashboard" element={<AdminDashboard/>}/>

        {/* Add other routes */}
        {/* <Route path="/projects" element={<Projects />} /> */}
      </Routes>
    </>
  );
}

export default App;
