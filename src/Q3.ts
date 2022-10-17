let name: string = "Eric";
console.log(
  `Hello ${name.toLowerCase()}, would you like to learn some Python today?`
);
console.log(
  `Hello ${name.toUpperCase()}, would you like to learn some Python today?`
);

const titleCase = name
  .split(" ")
  .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
  .join(" ");
console.log(`Hello ${titleCase}, would you like to learn some Python today?`);

export {};
