const stageOfLife = (age: number) => {
  if (age < 2) {
    console.log("Person is a baby");
  } else if (age >= 2 && age < 4) {
    console.log("Person is a toddler");
  } else if (age >= 4 && age < 13) {
    console.log("Person is a kid");
  } else if (age >= 13 && age < 20) {
    console.log("Person is a teenager");
  } else if (age >= 20 && age < 65) {
    console.log("Person is an adult");
  } else if (age >= 65) {
    console.log("Person is an elder");
  }
};

stageOfLife(5);
stageOfLife(20);
stageOfLife(70);
