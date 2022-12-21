const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");

//middleware
app.use(express.json()); //parse incoming json requests and puts parsed data in req.
app.use(cors()); //cross origin resource sharing, allows to access the server
app.use(express.static("./public/images"));

const videos = require("./routes/videos");
app.use("/videos", videos); //videos route

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
