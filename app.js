import os from "os";
import data from "./Exports.js";
import path from "path";
import { log } from "console";
import { readFileSync } from "fs";
import { writeFileSync } from "fs";
console.log(data);
//info about current user
const user = os.userInfo();

console.log(user);

//uptime of the system
console.log(os.uptime());

//objectifying the os module values as

const myOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
};
console.log(myOS);

console.log(path.sep);
const pathName = path.join("folder", "subfolder", "text.txt");
console.log(pathName);
console.log(path.basename(pathName));
