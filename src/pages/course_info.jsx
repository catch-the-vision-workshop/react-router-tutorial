import { useParams } from "react-router-dom";

export default function CourseInfo() {
  const { code } = useParams();
  return <h1>Course Info for: {code}</h1>;
}
