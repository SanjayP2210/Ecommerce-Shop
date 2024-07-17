import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/libs/dropzone/dist/min/dropzone.min.css";
import "./assets/css/styles.css";
import AppRouter from "./router/AppRouter.jsx";

function App() {
  return (
    <>
      <Router>
        <AppRouter />
      </Router>
    </>
  );
}

export default App;
