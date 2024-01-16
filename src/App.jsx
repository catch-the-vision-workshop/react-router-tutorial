import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import AboutUs from "./pages/about_us";
import CourseList from "./pages/course_list";
import NotFound from "./pages/not_found";
import CourseInfo from "./pages/course_info";
import SyntaxClub from "./pages/syntax";

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
        <Route path="/courses" element={<CourseList />} />
        <Route path="/about" element={<AboutUs />} />

        {/* will store value after /courses/.. inside "code" */}
        <Route path="/courses/:code" element={<CourseInfo />} />

        {/* react router tends to see if the path matches with the hardcoded one first before checking with the dynamic one*/}
        <Route path="/courses/syntax_club" element={<SyntaxClub />} />

        {/* will render this if url does not match any of the above */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
