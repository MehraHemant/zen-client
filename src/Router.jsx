import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import MainLayout from "./Layout/MainLayout/MainLayout";
import Class from "./pages/Class";
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
import Syllabus from "./pages/Syllabus";
import PrivateRoute from "./PrivateRoute";
import Webcode from "./pages/Webcode";
import Capstone from "./pages/Capstone";

const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { element: <Navigate to="/class" />, index: true },
        {
          path: "class",
          element: (
            <PrivateRoute>
              <Class />
            </PrivateRoute>
          ),
        },
        {
          path: "task",
          element: (
            <PrivateRoute>
              <Task />
            </PrivateRoute>
          ),
        },
        {
          path: "requirements",
          element: (
            <PrivateRoute>
              <Requirement />
            </PrivateRoute>
          ),
        },
        {
          path: "portfolio_submission",
          element: (
            <PrivateRoute>
              <Portfolio />
            </PrivateRoute>
          ),
        },
        {
          path: "application",
          element: (
            <PrivateRoute>
              <Application />
            </PrivateRoute>
          ),
        },
        {
          path: "interviewtask",
          element: (
            <PrivateRoute>
              <Interview />
            </PrivateRoute>
          ),
        },
        {
          path: "placement_board",
          element: (
            <PrivateRoute>
              <Placement />
            </PrivateRoute>
          ),
        },
        {
          path: "profile",
          element: (
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          ),
        },
        {
          path: "leave_application",
          element: (
            <PrivateRoute>
              <Leave />
            </PrivateRoute>
          ),
        },
        {
          path: "certificate",
          element: (
            <PrivateRoute>
              <Certificate />
            </PrivateRoute>
          ),
        },
        {
          path: "testimonial",
          element: (
            <PrivateRoute>
              <Testimonial />
            </PrivateRoute>
          ),
        },
        {
          path: "leaderboard",
          element: (
            <PrivateRoute>
              <Leaderboard />
            </PrivateRoute>
          ),
        },
        {
          path: "syllabus",
          element: (
            <PrivateRoute>
              <Syllabus />
            </PrivateRoute>
          ),
        },
        {
          path: "webcode",
          element: (
            <PrivateRoute>
              <Webcode />
            </PrivateRoute>
          ),
        },
        {
          path: "capstone",
          element: (
            <PrivateRoute>
              <Capstone />
            </PrivateRoute>
          ),
        },
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
