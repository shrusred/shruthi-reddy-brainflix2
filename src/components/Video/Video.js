import '../Video/Video.css';

function Video(props){
    console.log(props.activeVideo.image)
    return(
       <div className="video">
            <video className="video__activevideo" controls poster={props.activeVideo.image}></video>
       </div>
    );
}
export default Video;