const favorite_fruits: string[] = ["pomegranate", "strawberry", "grapes"];

if (favorite_fruits.includes("banana")) {
  console.log("You really like banana");
}

if (!favorite_fruits.includes("banana")) {
  console.log("You don't like banana");
}

if (favorite_fruits.includes("strawberry")) {
  console.log("You really like strawberry");
}

if (favorite_fruits.includes("apple")) {
  console.log("You like apple");
} else {
  console.log("You don't like apple");
}
