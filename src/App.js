import logo from "./logo.png";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div class="viewport">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Website coming soon!</p>

        <Routes>
          <Route path="/" element={<AboutUs />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="services" element={<Services />} />
          <Route path="get-involved" element={<GetInvolved />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </div>
  );
}

function AboutUs() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Services() {
  return (
    <div>
      <h2>Services</h2>
    </div>
  );
}

function GetInvolved() {
  return (
    <div>
      <h2>Get Involved</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Are you lost?</h2>
      <p>That page doesn't exist anymore</p>
    </div>
  );
}

export default App;
