import React from "react";
import Header from "./components/Header";
import { ThemeProvider } from "./components/theme/ThemeProvider";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <Outlet />
      </div>
    </ThemeProvider>
  );
}

export default App;
