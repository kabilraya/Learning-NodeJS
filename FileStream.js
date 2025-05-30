import fs from "fs";
//Reading and Writing in a file

const read = fs.readFileSync("./folder/subfolder/text.txt");
console.log(`The read file content is ${read}`);

let WriteString = "Hello World";
fs.writeFileSync("./folder/subfolder/text.txt", WriteString, { flag: "a" });
console.log(
  "But in syncronous file stream this runs after the file operations as the sync filestream halts all the opn until it is finished"
);
const data = fs.readFile(
  "./folder/subfolder/text.txt",
  "utf8",
  (err, result) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log(result);
    }
  }
);
console.log(
  "In asyncronous file reading this runs while the file operation is being done"
);
