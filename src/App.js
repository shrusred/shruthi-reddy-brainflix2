import './styles/App.css';
import Header from './components/Header/Header.js';
import Row from './components/Row/Row.js';
import Upload from './components/Upload/Upload.js';
import Video from './components/Video/Video.js';
import Title from './components/Title/Title.js';
import Description from './components/Description/Description.js';
import Comment from './components/Comment/Comment.js'
import Comments from './components/Comments/Comments.js'
import UploadPage from './components/UploadPage/UploadPage.js'
import ActiveVideoDisplay from './components/ActiveVideoDisplay/ActiveVideoDisplay.js'
import {useState,useEffect} from 'react';
import axios from 'axios';
import { Navigate,useParams} from 'react-router-dom';
import {BrowserRouter,Route,Routes} from 'react-router-dom';


function App() {
    

  //  const [activeVideo,setActiveVideo]=useState({id: '84e96018-4022-434e-80bf-000ce4cd12b8', title: 'BMX Rampage: 2021 Highlights', channel: 'Red Cow', image: 'https://i.imgur.com/l2Xfgpl.jpg'});//the first video object
    
  //  // //const [activeVideo,setActiveVideo]=useState({});//the first video object

  //   const [nextVideos,setNextVideos]=useState([]);//array of information next video requires; id,img url, title, uploader (full-currently active)
  
  //   const URL = "https://project-2-api.herokuapp.com/";

  //   let api_key_returned=''

  //   function getAPIKey(){//this function returns a promise
  //     if(api_key_returned===''){//if api key is not already there
  //         return axios.get(URL+'register').then((response)=>{//getting apikey
  //             console.log(response);
  //             api_key_returned=response.data.api_key;//set api key from call request to apikey variable
  //             console.log(api_key_returned);
  //             return Promise.resolve(api_key_returned)//return a promise
  //         });
  //     }
  //     else{
  //         return Promise.resolve(api_key_returned) ;//return existing key through promise
  //     }
  //   };

  //   useEffect(() => {
  //     getAPIKey();
  //   }, [])  

  // function getVideo(){
  //   return getAPIKey()
  //     .then((api_key)=>{
  //       console.log(api_key)
  //       return axios.get(URL+'videos'+`?api_key=${api_key}`)
  //         .then((result) =>{
  //             console.log("this is inside the getVideos function");
  //             let arrayofvideos=result.data;//array of videos
  //             //console.log(arrayofvideos[0])

  //             if (JSON.stringify(activeVideo)=="{}"){
  //               console.log("activeVideo array is empty")
  //               setActiveVideo(arrayofvideos[0])
  //               console.log(activeVideo)
  //               console.log(arrayofvideos[0])
  //               const default_nextvideos =arrayofvideos.filter(function( nv ) {
  //                 return nv.id!==activeVideo.id
  //             });
  //             setNextVideos(default_nextvideos);
  //             console.log(default_nextvideos);
  //             }
  //             else{
  //               console.log("am in the else statement in getVideos function")
  //               const default_nextvideos =arrayofvideos.filter(function( nv ) {
  //                 return nv.id!==activeVideo.id
  //             });
  //             setNextVideos(default_nextvideos);
  //             console.log(default_nextvideos);
  //             }
              
  //         });
  //     });
  // };
  
  // useEffect(() => {
  //   getVideo();
  //   console.log(getVideo());
  // }, [])  
 
  
  
  return (
    <>
      <Header />
      <Row />
      <Upload />
      <BrowserRouter> 
        <Routes> 
            <Route path="/" element={<Navigate to="/videos/84e96018-4022-434e-80bf-000ce4cd12b8"/>}></Route> 
            {/* <Route path="/videos/:videoid" element={<ActiveVideoDisplay activeVideo={activeVideo} videos={nextVideos}/>}></Route>  */}
            <Route path="/videos/:videoid" element={<ActiveVideoDisplay/>}></Route> 
            <Route path="/videos/upload" element={<UploadPage/>}></Route> 
        </Routes> 
      </BrowserRouter> 
      
      {/* <Video activeVideo={activeVideo}/> */}
      {/* <Title activeVideo={activeVideo}/> */}
      {/* <Description activeVideo={activeVideo}/> */}
      {/* <Comment activeVideo={activeVideo}/> */}
      {/* <Comments activeVideo={activeVideo}/> */}
      {/* <NextVideos handleClickVideo={handleClickVideo} videos={nextVideos}/> */}
       
    </>
  );
}

export default App;
