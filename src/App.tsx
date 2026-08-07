import { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  const [currentView, setCurrentView] = useState<"login" | "register" | "home">("login");

  if (currentView === "register") {
    return <Register onSwitchToLogin={() => setCurrentView("login")} />;
  }

  if (currentView === "login") {
    return (
      <Login 
        onSwitchToRegister={() => setCurrentView("register")} 
        onLoginSuccess={() => setCurrentView("home")} 
      />
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to Music App Home!</h1>
        <button 
          onClick={() => {
            localStorage.removeItem("token");
            setCurrentView("login");
          }} 
          className="px-4 py-2 bg-red-600 rounded hover:bg-red-500"
        >
          Logout
        </button>
      </div>
    </div>
  );
}