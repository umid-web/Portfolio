import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { ProjectProvider } from "./context/ProjectContext";
import Routes from "./routes";
import Loader from "./components/common/Loader";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <ThemeProvider>
      <ProjectProvider>
        <Router>
          <Suspense fallback={<Loader />}>
            <Routes />
          </Suspense>
        </Router>
        <Toaster position="top-right" reverseOrder={false} />
      </ProjectProvider>
    </ThemeProvider>
  );
}

export default App;
