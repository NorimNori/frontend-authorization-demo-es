import { Routes, Route, Navigate } from "react-router-dom";
import Ducks from "./Ducks";
import MyProfile from "./MyProfile";
import "./styles/App.css";
import { useState } from "react";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Routes>
      {/* Envuelve Ducks en ProtectedRoute y pasa isLoggedIn como propiedad. */}
      <Route
        path="/ducks"
        element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <Ducks />
          </ProtectedRoute>
        }
      />

      {/* Envuelve MyProfile en ProtectedRoute y pasa isLoggedIn como propiedad. */}
      <Route
        path="/my-profile"
        element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <MyProfile />
          </ProtectedRoute>
        }
      />

      <Route
        path="/login"
        element={
          <div className="loginContainer">
            <Login />
          </div>
        }
      />
    </Routes>
  );
}

export default App;
