import { Outlet } from "react-router-dom";

export default function CourseLayout() {
  return (
    <>
      <p>
        If you are seeing this message, it means that your URL contains /courses
      </p>
      {/* Outlet is used to render all the child components */}
      <Outlet />
    </>
  );
}
