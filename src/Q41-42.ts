//Question 41
const show_magicians = (magiciansArr: string[]) => {
  magiciansArr.map((magician: string) => {
    console.log(magician);
  });
};
let magicians: string[] = ["Aladdin", "David", "Lalisar", "John"];
show_magicians(magicians);
//Question 42
const make_great = (magiciansArr: string[]) => {
  magiciansArr.map((name: string, index: number) => {
    magiciansArr[index] = "The Great " + name;
  });
};
make_great(magicians);
show_magicians(magicians);
export {};
