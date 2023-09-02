import { CssBaseline } from "@mui/material";
import { useSelector } from "react-redux";
import ThemeProvider from "./theme/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Class from "./pages/Class";
import Sidebar from "./Layout/MainLayout/DrawerNav";
import MainLayout from "./Layout/MainLayout/MainLayout";
import Router from "./Router";
function App() {
  const mode = useSelector((state) => state.darkMode.mode);
  return (
    <BrowserRouter>
      <ThemeProvider>
        <CssBaseline>
          <Router/>
        </CssBaseline>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
