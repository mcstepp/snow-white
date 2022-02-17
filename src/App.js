import React from 'react';
import ReactDOM from 'react-dom';
import Pet from './Pet.js';

const App = () => {
  return React.createElement("div", {}, [
    React.createElement(
      "h1",
      {
        id: "my-brand",
      },
      "Adopt Me!"
    ),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havenese",
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel",
    }),
    React.createElement(Pet, {
      name: "Jameson",
      animal: "Cat",
      breed: "Domestic short hair",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
