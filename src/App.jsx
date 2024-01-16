import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import AboutUs from "./pages/about_us";
import NotFound from "./pages/not_found";
import CourseRoutes from "./CourseRoutes";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/courses">Course List</Link>
          </li>
          <li>
            <Link to="/courses/ITE101">Course ITE101</Link>
          </li>
          <li>
            <Link to="/courses/ITE420">Course ITE420</Link>
          </li>
          <li>
            <Link to="/courses/syntax_club">Syntax Club</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />

        {/* notice the use of * to match all course-related paths */}
        <Route path="/courses/*" element={<CourseRoutes />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
