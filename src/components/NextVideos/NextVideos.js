/*unique key(key) to outer most element when rendering a list of objects*/
import '../NextVideos/NextVideos.scss'
import {Link} from 'react-router-dom';

function NextVideos(props){
    console.log("this is inside NextVideos")
    const v = props.videos.map((video)=>{
        const video_path="/videos/".concat(video.id)
        return(
            
            <div key={video.id} className="nextvideo">

               <Link to={video_path} key={video.id}><img className="nextvideo__img" src={video.image} alt="nextvideo"></img></Link> 
                <h2 className="nextvideo__title">{video.title}</h2>
                <h3 className="nextvideo__uploader">{video.channel}</h3>
            </div>
        )
        // return(
        //     <div key={video.id} className="nextvideo" onClick={(event)=>{
        //         props.handleClickVideo(video)
        //     }}>
        //         <img className="nextvideo__img" src={video.image} alt="nextvideo"></img>
        //         <h2 className="nextvideo__title">{video.title}</h2>
        //         <h3 className="nextvideo__uploader">{video.channel}</h3>
        //     </div>
        // )
   })
    return(
       <div className="nextvideos">
            <h2 className="nextvideos__title">NEXT VIDEOS</h2>
            {v}
       </div>
    );
}
export default NextVideos;