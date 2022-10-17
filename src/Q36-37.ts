const make_shirt = (size: string, message: string) => {
  console.log("Shirt size: " + size + ". Message: " + message);
};
make_shirt("XS", "Relax! Peoples are colorful!");

//updated
function make_shirtUpdate(
  size: string = "L",
  message: string = "I love JavaScript"
) {
  console.log("Shirt size: " + size + ". Message: " + message);
}
make_shirtUpdate();
make_shirtUpdate("M");
make_shirtUpdate("XL", "You are amazing!");
