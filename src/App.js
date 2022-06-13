import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import Notfound from "./components/Not-found";
import Dashboard from "./components/Dashboard";
import Contactus from "./components/Contactus";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/header" element={<Header />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/404" element={<Notfound />} />
        <Route exact path="/contact" element={<Contactus />} />
        <Route path="*" element={<Navigate to="/404" />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
