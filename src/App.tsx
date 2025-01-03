import button from "../../ui/components/button";

function App() {
  const { root } = button();
  return (
    <div className="min-h-screen bg-background">
      <button className={root()}>Click me</button>
    </div>
  );
}

export default App;
