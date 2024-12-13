const http = require("http");
require("./config/dbConnect.js");
const app = require("./app/app.js");
const PORT = process.env.PORT || 1000;

// SERVER
const server = http.createServer(app);
server.listen(PORT, console.log(`Server is running on ${PORT}`));
