import { createBrowserRouter } from "react-router";
import Login from "./features/auth/pages/Login.jsx";
import SignUp from "./features/auth/pages/SignUp.jsx";
export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);
