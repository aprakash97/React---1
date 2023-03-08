//component name - Pet

// const Pet = (props) => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, props.name),
//     React.createElement("h1", {}, props.animal),
//     React.createElement("h1", {}, props.breed)
//   );
// };

const Pet = (props) => {
  const { name, animal, breed, location, images, id } = props;
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";

  if (images.length) {
    hero = images[0];
  }
  return (
    <div>
      <a href={`/details/${id}`} className="pet">
        <div className="image-container">
          <img src={hero} alt={name} />
        </div>
        <div className="info">
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {location}
          </h2>
        </div>
      </a>
    </div>
  );
};

export default Pet;
