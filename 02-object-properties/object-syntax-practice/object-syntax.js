/* eslint-disable no-unused-vars */
const loud = 'loud';
const name = 'Cody';
const dog = {};
dog.name = name;
dog.bark = () => {return 'ruff ruff!'};
dog[`${loud}Bark`] = () => {return dog.bark().toUpperCase();};