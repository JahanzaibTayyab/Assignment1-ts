let item: string = "socks";
console.log("item == socks should be true => ", item == "socks");
console.log("item != socks should be false => ", item != "socks");
console.log("item == sneakers should be false => ", item == "sneakers");
console.log("item != sneakers should be true => ", item != "sneakers");
console.log("item == SOCKS should be false => ", item == "SOCKS");
let count: number = 7;
console.log("count == 7 should be true => ", count == 7);
console.log("count != 7 should be false => ", count != 7);
console.log("count < 5 should be false => ", count < 5);
console.log("count > 5 should be true => ", count > 5);
console.log("count >= 7 should be true => ", count >= 7);
console.log("count <= 7 should be true => ", count <= 7);

console.log(
  "count > 5 && count == 7 should be true => ",
  count > 5 && count == 7
);
console.log(
  "count < 5 && count > 7 should be false => ",
  count > 5 && count > 7
);
console.log(
  "count < 5 || count > 7 should be false => ",
  count < 5 || count > 7
);
console.log(
  "count > 5 || count == 7 should be true => ",
  count > 5 || count == 7
);
let arr: Array<string> = ["items", "count"];
console.log("arr.includes('Mango') should be false =>", arr.includes("Mango"));
console.log("arr.includes('items') should be true =>", arr.includes("items"));
console.log("arr.includes('ITEMS') should be false =>", arr.includes("ITEMS"));
console.log(
  "arr.includes('items', 1) should be false =>",
  arr.includes("items", 1)
);
