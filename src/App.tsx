import { Plus } from "lucide-react";
import button from "../../ui/components/button";

function App() {
  const { root, end } = button();
  return (
    <div className="p-6 min-h-screen bg-background">
      <button className={root()}>
        Add
        <span className={end()}>
          <Plus />
        </span>
      </button>
    </div>
  );
}

export default App;
