import { Routes, Route, useRoutes } from "react-router-dom";
import Home from "./components/home";
import Dashboard from "./components/Dashboard";
import TaskMarketplace from "./components/TaskMarketplace";
import TaskDetail from "./components/TaskDetail";
import AuthForms from "./components/AuthForms";
import Settings from "./components/Settings";
import MainNavigation from "./components/MainNavigation";

// Import tempo routes if in development
import routes from "tempo-routes";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />
      <main>
        {/* For the tempo routes */}
        {import.meta.env.VITE_TEMPO && useRoutes(routes)}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/marketplace" element={<TaskMarketplace />} />
          <Route path="/task/:id" element={<TaskDetail />} />
          <Route path="/auth" element={<AuthForms />} />
          <Route path="/settings" element={<Settings />} />

          {/* Add this before any catchall route */}
          {import.meta.env.VITE_TEMPO && (
            <Route path="/tempobook/*" element={null} />
          )}

          {/* Fallback route */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}
