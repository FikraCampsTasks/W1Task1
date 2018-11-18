// fs module to read and write files.
const fs = require("fs");

// readFile used to read file asynchronous.
fs.readFile("./flower.txt", (err, data) => {
  //Check if error stop execution by using return.
  if (err) return;

  //converting date to sting and using split to convert string to array.
  const flowers = data.toString().split("\n");

  // Assign number of row = length of array to the NumberOfRows constant.
  const NumberOfRows = flowers.length;
  console.log("Number of Rows: ", NumberOfRows);

  // Create sFlower array by using filter method.
  const sFlowers = flowers.filter(flower => flower[0] == "S");
  console.log("List the flower name that start with letter 'S':", sFlowers);

  // Remaining Flower equal to diffrence between tatal flowers length and sFlowers length
  const remainingFlower = flowers.length - sFlowers.length;
  console.log(
    "Count the number of flower that not start with letter 'S':",
    remainingFlower
  );

  // Create aFlower array by using filter method.
  const aFlower = flowers.filter(flower => flower[0] == "A");
  console.log(
    "List the flower start with first letter of your name if your name start with 'S' use second letter:",
    aFlower
  );

  // Create fiveLettersNameFlowers array by using filter method.
  const fiveLettersNameFlowers = flowers.filter(flower => flower.length == 5);
  console.log("List all the flower the length of name is 5:", fiveLettersNameFlowers);
});