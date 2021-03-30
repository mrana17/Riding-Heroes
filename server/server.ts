import http from "http";
import dotenv from "dotenv";
import { connectDB } from "./db";
import { handleGET, handlePOST } from "./handleFunctions";

dotenv.config();

const port = process.env.PORT;
const url = process.env.MONGODB_URL;

connectDB(url, "RidingHeroes");

const server = http.createServer(async (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "http://localhost:3333");
  if (request.url === "/") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");
    response.end("<h1>RidingHeroes</h1>");
    return;
  }

  if (request.method === "POST") {
    handlePOST(request, response);
    return;
  }

  const parts = request.url.match(/\/api\/hello\/(\w+)/);
  if (!parts) {
    response.statusCode = 400;
    response.end();
    return;
  }
  const [, surname] = parts;

  if (request.method === "GET") {
    handleGET(request, response, surname);
    return;
  }

  response.statusCode = 405;
  response.end();
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
