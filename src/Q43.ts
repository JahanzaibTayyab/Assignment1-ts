const magicians: Array<string> = ["Aladdin", "David", "Lalisar", "John"];
const show_magicians = (magiciansArr: Array<string>) => {
  magiciansArr.map((magician: string) => {
    console.log(magician);
  });
};
const make_great = (magiciansArr: Array<string>) => {
  const arr: Array<string> = [];
  magiciansArr.map((name) => {
    arr.push("The Great " + name);
  });
  return arr;
};
let new_arr: Array<string> = make_great(magicians);
console.log("Original: ");
show_magicians(magicians);
console.log("New Array: ");
show_magicians(new_arr);
