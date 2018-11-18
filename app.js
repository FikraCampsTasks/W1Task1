// fs module to read and write files.
const fs = require("fs");

// readFile used to read file asynchronous.
fs.readFile("./flower.txt", (err, data) => {
  //Check if error stop execution by using return.
  if (err) return;

  //converting date to sting and using split to convert string to array.
  const flowers = data.toString().split("\n");

  const NumberOfRows = flowers.length;
  const sFlowers = [];
  let remainingFlowers = 0;
  const aFlowers = [];
  const fiveLettersNameFlowers = [];
  for (let i = 0; i < flowers.length; i++) {
    const flower = flowers[i];
    // if first letter is "S" then push to sFlower else increment remainingFlowers by 1
    if (flower[0] == "S") sFlowers.push(flower);
    else remainingFlowers++;
    
    // if first letter is "A" then push to aFlower
    if (flower[0] == "A") aFlowers.push(flower);

    // if flower name length is 5 then push to aFlower
    if (flower.length == 5) fiveLettersNameFlowers.push(flower);
  }
  console.log("Number of Rows: ", NumberOfRows);
  console.log("List the flower name that start with letter 'S':", sFlowers);
  console.log(
    "Count the number of flower that not start with letter 'S':",
    remainingFlowers
  );
  console.log(
    "List the flower start with first letter of your name if your name start with 'S' use second letter:",
    aFlowers
  );
  console.log(
    "List all the flower the length of name is 5:",
    fiveLettersNameFlowers
  );
});