import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
  } else if (req.url === "/about") {
    res.end("About Page");
  } else {
    res.end("Error Page");
  }
});

server.listen(5000, () => {
  console.log("Server is listening at port 5000");
});
