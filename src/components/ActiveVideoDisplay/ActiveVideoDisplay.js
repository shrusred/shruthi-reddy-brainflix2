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
  console.log("ActiveVideoDisplay video id from Param");
  console.log(videoid);
  ///////console.log(props.activeVideo)

  const [activeVideo, setActiveVideo] = useState({
    id: "84e96018-4022-434e-80bf-000ce4cd12b8",
    title: "BMX Rampage: 2021 Highlights",
    channel: "Red Cow",
    image: "https://i.imgur.com/l2Xfgpl.jpg",
  }); //the first video object

  // //const [activeVideo,setActiveVideo]=useState({});//the first video object

  const [nextVideos, setNextVideos] = useState([]); //array of information next video requires; id,img url, title, uploader (full-currently active)

  const URL = "https://project-2-api.herokuapp.com/";

  //  let api_key_returned=''
  // let API_KEY = "";
  const API_KEY = "f17b9481-7494-4280-818d-ca483d2a082e";

  // function getAPIKey() {
  //   //this function returns a promise
  //   //if(api_key_returned===''){//if api key is not already there
  //   console.log(URL + "register");
  //   if (API_KEY === "") {
  //     //if api key is not already there
  //     return axios.get(URL + "register").then((response) => {
  //       //getting apikey
  //       console.log(response);
  //       //api_key_returned=response.data.api_key;//set api key from call request to apikey variable
  //       API_KEY = response.data.api_key; //set api key from call request to apikey variable
  //       console.log("API_KEY");
  //       //console.log(api_key_returned);
  //       console.log(API_KEY);
  //       // return Promise.resolve(api_key_returned); //return a promise
  //       return Promise.resolve(API_KEY); //return a promise
  //     });
  //   } else {
  //     //return Promise.resolve(api_key_returned); //return existing key through promise
  //     return Promise.resolve(API_KEY); //return a promise
  //   }
  // }

  // useEffect(() => {
  //   getAPIKey();
  // }, []);

  //  function getVideo(){
  //    return getAPIKey()
  //      .then((api_key)=>{
  //        console.log(api_key)
  //        return axios.get(URL+'videos'+`?api_key=${api_key}`)
  //          .then((result) =>{
  //              console.log("this is inside the getVideos function");
  //              let arrayofvideos=result.data;//array of videos
  //              console.log(arrayofvideos)
  //              const default_nextvideos =arrayofvideos.filter(function( nv ) {
  //                   return nv.id!==activeVideo.id
  //             });
  //             setNextVideos(default_nextvideos)
  //          });
  //      });
  //  };

  function getVideo() {
    axios.get(URL + "videos" + `?api_key=${API_KEY}`).then((result) => {
      console.log("this is inside the getVideos function");
      let arrayofvideos = result.data; //array of videos
      console.log(arrayofvideos);

      const default_nextvideos = arrayofvideos.filter(function (nv) {
        return nv.id !== activeVideo.id;
      });
      setNextVideos(default_nextvideos);
    });
  }

  useEffect(() => {
    getVideo();
  }, []);

  useEffect(() => {
    axios
      .get(URL + "videos/" + videoid + `?api_key=${API_KEY}`) //axios get
      .then((result) => {
        console.log(result.data);
        setActiveVideo(result.data);
        getVideo();
      });
  }, [videoid]);

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
