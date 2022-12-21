import "../ActiveVideoDisplay/ActiveVideoDisplay.scss";
import Video from "../Video/Video.js";
import Title from "../Title/Title.js";
import Description from "../Description/Description.js";
import Comment from "../Comment/Comment.js";
import Comments from "../Comments/Comments.js";
import NextVideos from "../NextVideos/NextVideos";
import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, useParams } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function ActiveVideoDisplay() {
  const { videoid } = useParams();

  const [activeVideoID, setActiveVideoID] = useState(
    "84e96018-4022-434e-80bf-000ce4cd12b8"
  ); //the first video object's ID

  const [activeVideo, setActiveVideo] = useState({}); //the first video object

  const [nextVideos, setNextVideos] = useState([]); //array of information next video requires; id,img url, title, uploader (full-currently active)

  const URL = "https://project-2-api.herokuapp.com/";
  const URL_local = "http://localhost:8080/";

  const API_KEY = "f17b9481-7494-4280-818d-ca483d2a082e";

  // axios.get("http://localhost:8080/videos").then((res) => {
  //   console.log(res);
  // });

  function getMainVideo(avid) {
    //sets the activeVideo object based on activeVideoID
    axios.get(URL_local + "videos/" + avid).then((result) => {
      console.log(result);
      setActiveVideoID(avid);
      setActiveVideo(result.data);
      console.log(
        "this is inside the getMainVideo function",
        "avid: ",
        avid,
        "  result: ",
        result.data
      );
    });
  }

  useEffect(() => {
    setActiveVideoID(videoid);

    axios
      .get(URL_local + "videos/" + videoid) //axios get
      .then((result) => {
        getMainVideo(videoid);
        getVideo(videoid);
      });
  }, [videoid]);

  function getVideo(av) {
    axios.get(URL_local + "videos").then((result) => {
      console.log("this is inside the getVideos function", result.data);
      let arrayofvideos = result.data; //array of videos
      let default_nextvideos = arrayofvideos.filter(function (nv) {
        console.log(nv.id);
        return nv.id !== av;
      });

      console.log(default_nextvideos);
      setNextVideos(default_nextvideos);
      console.log(
        "next videos: ",
        default_nextvideos,
        " type of next videos: ",
        typeof default_nextvideos
      );
    });
  }

  useEffect(() => {
    getVideo();
  }, []);

  console.log("this is the active video object", activeVideo);

  return (
    <>
      <Video activeVideo={activeVideo} />
      <Title activeVideo={activeVideo} />
      <Description activeVideo={activeVideo} />
      <Comment activeVideo={activeVideo} />
      <Comments activeVideo={activeVideo} />
      {<NextVideos videos={nextVideos} />}
    </>
  );
}
export default ActiveVideoDisplay;
