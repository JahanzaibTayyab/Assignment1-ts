const sandwich_summary = (...items: Array<string>) => {
  console.log("A sandwich ordered with items: ");
  items.map((item: string) => console.log(item));
};
let items: Array<string> = ["pepperoni", "cheese", "onions", "ham"];
sandwich_summary(...items);
items = ["mayo", "garlic", "cheese", "onions", "chicken", "cucember", "carrot"];
sandwich_summary(...items);
