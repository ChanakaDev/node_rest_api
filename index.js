// Import express
import express from "express";

// express() method creates and express application
const app = express();

// Define a port number
const PORT = 3000;

// setting up a HTTP get request
app.get("/", (req, res) =>
  res.send(`Node and express server is running on port ${PORT}`)
);

// Start a server that listens for incoming network requests on a specific port
app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`));
