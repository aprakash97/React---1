//component name - App
const Pet = (props) => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, props.name),
    React.createElement("h1", {}, props.animal),
    React.createElement("h1", {}, props.breed)
  );
};

//component name - App
const App = () => {
  return React.createElement("div", {}, [
    React.createElement(Pet, {
      name: "luna",
      animal: "dog",
      breed: "western",
    }),
    React.createElement("h1", {}, "Adopt Me!"),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
