import "./App.css";
import { Dashboard } from "./components/dashboard";
import { TooltipProvider } from "./components/ui/tooltip";

function App() {
  return (
    <>
      <TooltipProvider>
        <Dashboard />
      </TooltipProvider>
    </>
  );
}

export default App;
