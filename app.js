const fs = require("fs");
//Without Using any external library.
fs.readFile("./flower.txt", (err, data) => {
  if(err) return;
  const flowers = data.toString().split("\n");
  console.log("Number of Rows: ", flowers.length);
  const sFlower = flowers.filter(flower => flower[0] == "S");
  console.log("List the flower name that start with letter 'S':", sFlower);
  console.log("Count the number of flower that not start with letter 'S':",flowers.length - sFlower.length);
  const aFlower = flowers.filter(flower => flower[0] == "A");
  console.log("List the flower start with first letter of your name if your name start with 'S' use second letter:",sFlower);
  const fiveFlower = flowers.filter(flower => flower.length == 5);
  console.log("List all the flower the length of name is 5:", fiveFlower);
});