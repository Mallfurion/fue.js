/**
 * This is the server file, used to boot up the app and serve required files.
 * Micro implementation of http-server.
 * Author: Mallfurion
 */
const http = require("http");
var path = require("path");
const fs = require("fs");

const HOST = "localhost";
const PORT = process.env.PORT || 3000;
const MIME_TYPES = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".mjs": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".wav": "audio/wav",
  ".mp4": "video/mp4",
  ".woff": "application/font-woff",
  ".ttf": "application/font-ttf",
  ".eot": "application/vnd.ms-fontobject",
  ".otf": "application/font-otf",
  ".wasm": "application/wasm",
};

const requestListener = function (req, res) {
  console.log(`Request received: ${req.url}`);
  let filePath = `.${req.url}`;
  if (filePath == "./") {
    filePath = "./index.html";
  }
  const contentType =
    MIME_TYPES[String(path.extname(filePath).toLowerCase())] ||
    "application/octet-stream";

  fs.readFile(filePath, (err, fileContent) => {
    if (err) {
      console.error(`Error: ${err}`);
      res.writeHead(418, { "Content-Type": "text/html" });
    }
    res.writeHead(200, { "Content-Type": contentType });
    res.end(fileContent, "utf-8");
  });
};

const server = http.createServer(requestListener);
server.listen(PORT, HOST, () =>
  console.log(`Serving app on http://${HOST}:${PORT}`)
);
