import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import MainLayout from "./Layout/MainLayout/MainLayout";
import Class from "./pages/Class";
import Dashboard from "./pages/Dashboard";
import Task from "./pages/Task";
import Login from "./pages/Login";
import Page404 from "./pages/Page404";
import Requirement from "./pages/Requirement";
import Portfolio from "./pages/Portfolio";
import Application from "./pages/Application";
import Interview from "./pages/Interview";
import Placement from "./pages/Placement";
import Profile from "./pages/Profile";
import Leave from "./pages/Leave";
import Certificate from "./pages/Certificate";
import Testimonial from "./pages/Testimonial";
import Leaderboard from "./pages/Leaderboard";

const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { element: <Navigate to="/class" />, index: true },
        { path: "class", element: <Class /> },
        { path: "dashboard", element: <Dashboard /> },
        { path: "task", element: <Task /> },
        { path: "requirements", element: <Requirement /> },
        { path: "portfolio_submission", element: <Portfolio /> },
        { path: "application", element: <Application /> },
        { path: "interviewtask", element: <Interview /> },
        { path: "placement_board", element: <Placement /> },
        { path: "profile", element: <Profile /> },
        { path: "leave_application", element: <Leave /> },
        { path: "certificate", element: <Certificate /> },
        { path: "testimonial", element: <Testimonial /> },
        { path: "leaderboard", element: <Leaderboard /> },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    { path: "404", element: <Page404 /> },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);
  return routes;
};

export default Router;
