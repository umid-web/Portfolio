import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Routes from "./routes";
import Loader from "./components/common/Loader";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes />
        </Suspense>
      </Router>
      <Toaster position="top-right" reverseOrder={false} />
    </LanguageProvider>
  );
}

export default App;
