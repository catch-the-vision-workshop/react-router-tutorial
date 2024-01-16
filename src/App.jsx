import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import AboutUs from "./pages/about_us";
import CourseList from "./pages/course_list";
import NotFound from "./pages/not_found";

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
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CourseList />} />
        <Route path="/about" element={<AboutUs />} />

        {/* will render this if url does not match any of the above */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
