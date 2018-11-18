const fs = require("fs");
//Using external library.
const _ = require("underscore")
fs.readFile("./flower.txt", (err, data) => {
  if(err) return;
  const flowers=data.toString().split("\n");
  console.log("Number of Rows: ",flowers.length);
  const sFlower = _.filter(flowers,(flower)=>flower[0]=="S")
  console.log("List the flower name that start with letter 'S':",sFlower);
  console.log("Count the number of flower that not start with letter 'S':",flowers.length-sFlower.length);
  const aFlower = _.filter(flowers,(flower)=>flower[0]=="A")
  console.log("List the flower start with first letter of your name if your name start with 'S' use second letter:",aFlower);
  const fiveFlower=_.filter(flowers,(flower)=>flower.length==5)
  console.log("List all the flower the length of name is 5:",fiveFlower);
});