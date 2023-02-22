import { createRoot } from "react-dom/client";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";

//component name - App
const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      {/* <Pet name="adda" animal="dog" breed="western" /> */}
      <SearchParams />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
