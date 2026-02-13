import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";





export default function App() {
return (
<Router>
<nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
<div className="container">
<span className="navbar-brand fw-bold text-danger">UJJAWAL</span>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="nav">
<ul className="navbar-nav ms-auto">
<li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
<li className="nav-item"><Link className="nav-link" to="/education">Education</Link></li>
<li className="nav-item"><Link className="nav-link" to="/skills">Skills</Link></li>
<li className="nav-item"><Link className="nav-link" to="/projects">Projects</Link></li>
<li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
</ul>
</div>
</div>
</nav>


<Routes>
<Route path="/" element={<Home />} />
<Route path="/education" element={<Education />} />
<Route path="/skills" element={<Skills />} />
<Route path="/projects" element={<Projects />} />
<Route path="/about" element={<About />} />
</Routes>
</Router>
);
}