import http from "http";
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to Home");
  } else if (req.url === "/about") {
    res.end("Welcome to the About Page");
  } else {
    res.end(`
    <h1>OOPS!!</h1>
    <p>This page doesn't exist</p>
    `);
  }
});

server.listen(5000);

//npm - global command, comes with node
//local dependancies - used only in this particular project
//npm i <packageNAme>

//global dependenacies - use it in any project
//npm install -g <packageName>
