import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
      // navigate(-1) essentially returns to the previous page
      // navigate(-2) returns to the 2nd previous page
    }, 1000);
  }, []);

  return <h1>Page Not Found! Going back to home page in 1 second</h1>;
}
