import { useMemo } from "react";
import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./pages/App/Home";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import AppLayout from "./pages/Layout/AppLayout";
import AuthLayout from "./pages/Layout/AuthLayout";
import DashboardLayout from "./pages/Layout/DashboardLayout";

const RouterBuilder = () => {
  //Only for client to see
  const generalRoutes: RouteObject[] = [
    {
      path: "/",
      element: <Home />,
    },
  ];

  //Login,register,etc
  const authRoutes: RouteObject[] = [
    {
      path: "/login",
      element: <Login />,
    },
  ];

  //Only for admin to see
  const adminRoutes: RouteObject[] = [
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
  ];

  const routes = createBrowserRouter([
    {
      element: <AppLayout />,
      children: generalRoutes,
    },
    {
      element: <AuthLayout />,
      children: authRoutes,
    },
    {
      element: <DashboardLayout />,
      children: adminRoutes,
    },
  ]);

  return routes;
};

function App() {
  const routes = useMemo(() => RouterBuilder(), []);

  return <RouterProvider router={routes} />;
}

export default App;
