import button from "../components/button";

function App() {
  const { root } = button({ color: "indigo", surface: "outline" });
  return (
    <div className="p-6 min-h-screen bg-background">
      <button className={root()}>Click Me!</button>
    </div>
  );
}

export default App;
