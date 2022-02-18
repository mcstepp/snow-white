import React from 'react';
import ReactDOM from 'react-dom';
import Pet from './Pet.js';

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement(
//       "h1",
//       {
//         id: "my-brand",
//       },
//       "Adopt Me!"
//     ),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Havenese",
//     }),
//     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "Bird",
//       breed: "Cockatiel",
//     }),
//     React.createElement(Pet, {
//       name: "Jameson",
//       animal: "Cat",
//       breed: "Domestic short hair",
//     }),
//   ]);
// };

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Havenese" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Jameson" animal="Cat" breed="Domestic short hair" />
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById("root"));
