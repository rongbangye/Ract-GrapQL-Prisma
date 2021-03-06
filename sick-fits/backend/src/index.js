// let's go!
require("dotenv").config({ path: "variables.env" });
const createServer = require("./createServer");
const db = require("./db");

const server = createServer();

// TODO use express middle to handle cookie (JWT)
// TODO use express middleware to populate current user

server.start(
  {
    // we only want this endpoint able to be visited from our approved URLs
    cors: {
      credential: true,
      origin: process.env.FRONTEND_URL,
    },
  },
  (deets) => {
    console.log(`Server is now running on port
  http:/localhost:${deets.port}`);
  }
);
