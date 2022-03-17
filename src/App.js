import logo from "./assets/logo.png";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./App.css";

const darkTheme = createTheme({
  palette: { mode: "dark", primary: { main: "#1976d2" } },
});

const pages = [
  {
    key: "aboutUs",
    name: "About Us",
    uri: "/about-us",
    element: <AboutUs />,
  },
  {
    key: "services",
    name: "Services",
    uri: "/services",
    element: <Services />,
  },
  {
    key: "getInvolved",
    name: "Get Involved",
    uri: "/get-involved",
    element: <GetInvolved />,
  },
  {
    key: "fixYourOwnBike",
    name: "Fix Your Own Damn Bike!",
    uri: "/fix-your-own-bike",
    element: <FixYourOwnBike />,
  },
];

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <NavBar pages={pages} />
        <div className="viewport">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Website coming soon!</p>

          <Routes>
            <Route path="/" element={<AboutUs />} />
            {pages.map((page) => (
              <Route path={page.uri} element={page.element} />
            ))}
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
}

function AboutUs() {
  return (
    <div>
      <h2>About Us</h2>
      <ul>
        <li>History</li>
        <li>Location</li>
        <li>Hours</li>
        <li>Meet the team</li>
        <li>Community Involvement</li>
      </ul>
    </div>
  );
}

function FixYourOwnBike() {
  return (
    <div>
      <h2>Fix Your Own Damn Bike!</h2>
    </div>
  );
}

function Services() {
  return (
    <div>
      <h2>Services</h2>
      <ul>
        <li>Kids bikes</li>
        <li>Refurbishing</li>
        <li>Repairs</li>
        <li>Bike Skills Education</li>
        <li>Recycling</li>
      </ul>
    </div>
  );
}

function GetInvolved() {
  return (
    <div>
      <h2>Get Involved</h2>
      <ul>
        <li>Donate</li>
        <li>Recycle old bikes or parts</li>
        <li>Volunteer</li>
        <li>Become a sponsor</li>
      </ul>
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
