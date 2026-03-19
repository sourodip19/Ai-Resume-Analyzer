import { createBrowserRouter } from "react-router";
import Login from "./features/auth/pages/Login.jsx";
import SignUp from "./features/auth/pages/SignUp.jsx";
import ProtectedRoute from "./features/auth/components/Protected.jsx";
export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <h1>Home</h1>
      </ProtectedRoute>
    ),
  },
]);
