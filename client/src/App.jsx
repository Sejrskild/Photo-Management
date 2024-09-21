import axios from "axios";
import { useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import { TooltipProvider } from "./components/ui/tooltip";

const requiresAuth = async () => {
  if (1 + 1 == 3) {
    return redirect("/login");
  }
  return null;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    loader: requiresAuth,
    children: [
      {
        path: "/",
        element: <div className="popover">Dashboard</div>,
      },
      {
        path: "/users",
        element: <div>Users</div>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <>
      <TooltipProvider>
        <RouterProvider router={router} />
      </TooltipProvider>
    </>
  );
}

export default App;
