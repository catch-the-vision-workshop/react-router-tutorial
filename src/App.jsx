import "./App.css";
import { Link, NavLink, Route, Routes } from "react-router-dom";
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
            <NavLink to="/">
              {({ isActive }) =>
                isActive ? "You are in the home page" : "Home"
              }
            </NavLink>
          </li>

          {/*
            Notice here that the "Course List" item turns green even you click on ITE101, ITE420, and Syntax Club
            if you don't want this behavior, simply put "end" inside the NavLink

            <NavLink end style={.....}>
          */}
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? { color: "green" } : {})}
              to="/courses"
            >
              Course List
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) => "do-some-tailwindCSS-logic-here"}
              to="/courses/ITE101"
            >
              Course ITE101
            </NavLink>
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
