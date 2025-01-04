import button from "../components/button";
import { Plus } from "lucide-react";

function App() {
  const { root, end } = button({ color: "indigo", surface: "outline" });
  return (
    <div className="p-6 min-h-screen bg-background">
      <button className={root()}>
        Add
        <Plus className={end()} />
      </button>
    </div>
  );
}

export default App;
