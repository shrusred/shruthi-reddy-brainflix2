const express = require("express");
const router = express.Router();
const fs = require("fs");
const uuid = require("uuid").v4;

router.use(express.json());

const videos_filepath = "./data/videos.json";

//router function for GET requests at /videos. chain POST endpoint . The pathway will still be /videos
router
  .route("/")
  .get((req, res) => {
    //get videos data from videos.json file in the videos_filepath
    const videosFile = fs.readFileSync(videos_filepath);
    const videosData = JSON.parse(videosFile); //converts a string to JSON
    console.log(videosData);
    res.json(videosData);
  })
  .post((req, res) => {
    //destructure req.body into keys that will be pushed into videos.json file
    const {
      title,
      channel,
      image,
      description,
      views,
      likes,
      duration,
      video,
      timestamp,
      comments,
    } = req.body;

    const newVideo = {
      id: uuid(),
      title,
      channel: "",
      image: "http://localhost:8080/thumbnail1.jpeg",
      description,
      views: 0,
      likes: 0,
      duration: "5:20",
      video: "",
      timestamp: 1628522461000,
      comments: [],
    };

    const videosFilePost = fs.readFileSync(videos_filepath);
    const videosDataPost = JSON.parse(videosFilePost); //converts a string to JSON

    //get current data from videos json file before new data from req.body is pushed
    let new_videosData = videosDataPost;

    //add user data to videos array
    new_videosData.push(newVideo);

    //persist the data with the new object to videos.json
    const stringified_new_videosData = JSON.stringify(new_videosData); //converts to JSON string
    fs.writeFileSync(videos_filepath, stringified_new_videosData);

    res.status(201).json(newVideo);
  });

//router function: when user requests /videos/:id, respond with detailed video object that includes comments

router.get("/:id", (req, res) => {
  // Read the file and find the video object whose id matches the requested id

  const videoFile = fs.readFileSync(videos_filepath);
  const videoData = JSON.parse(videoFile); //converts a string to JSON

  const singleVideo = videoData.find((v) => v.id === req.params.id);

  // Was the video found?
  if (singleVideo === undefined) {
    res.sendStatus("the id you sent doesn't match available video ids");
  } else {
    // Respond with the single video
    res.json(singleVideo);
  }
});

module.exports = router;
