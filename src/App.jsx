import { createRoot } from "react-dom";
import Pet from "./Pet";

//component name - App
const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="adda" animal="dog" breed="western" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
