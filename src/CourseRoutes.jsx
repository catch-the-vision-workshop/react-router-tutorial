import { Route, Routes } from "react-router-dom";
import CourseList from "./pages/course_list";
import CourseInfo from "./pages/course_info";
import SyntaxClub from "./pages/syntax";
import CourseLayout from "./CourseLayout";

export default function CourseRoutes() {
  return (
    <>
      <CourseLayout />
      <Routes>
        <Route index element={<CourseList />} />
        <Route path=":code" element={<CourseInfo />} />
        <Route path="syntax_club" element={<SyntaxClub />} />
      </Routes>
    </>
  );
}
