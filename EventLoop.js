//nodejs is singlethreaded so the Event loop
//  helps
// in nonblocking I/O by offloading the tasks
console.log("This is the First Operation");
setTimeout(() => {
  console.log("This is the second operation");
}, 0); //this gets offloaded until the code next to it is not
//completed
//So EventLoop itself is a synchronous process
//But it seems the operations are being done
//asynchronously
console.log("This is the third operation");
console.log("This is the Fourth operation");
console.log("This is the nth operation");

//setInterval

console.log("This is the First Operation");
setInterval(() => {
  console.log("Hello World");
}, 2000); //every two sec this callback is called
//Killed by ctrl+c

console.log("This runs first");
