const http = require("http");
const server = http.createServer((req, res) => {
  console.log("Request received", req.url);
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Hello, World!");
    res.end();
  }
  if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("About page");
    res.end();
  }
  if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Contact page");
    res.end();
  }
  res.writeHead(404, { "Content-Type": "text/plain" });
  res.write("404 Not Found");
  res.end();
});
server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
