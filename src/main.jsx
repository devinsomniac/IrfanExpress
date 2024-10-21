import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home.jsx";
import Hospital from "./pages/Hospital/Hospital.jsx";
import Document from "./pages/Document.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LogIn from "./pages/LogIn.jsx";
import Register from "./pages/RegisterUser/Register.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import { AuthProvider } from "./components/AuthContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Appointment",
    element:<Hospital/>
  },
  {
    path: "/DocumentPocket",
    element: <PrivateRoute element={Document}/>
  },
  {
    path:"/Login",
    element:<LogIn/>
  },
  {
    path:"/Register",
    element:<Register/>
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router}/>
    </AuthProvider>
  </StrictMode>
);
