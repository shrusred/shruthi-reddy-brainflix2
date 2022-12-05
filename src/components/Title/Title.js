import views from '../../assets/Icons/views.svg'
import likes from '../../assets/Icons/likes.svg'
import '../Title/Title.css'
function Title(props){
    console.log("this is in the title props:",props.activeVideo.timestamp);

    function date(timestamp) {
        const d = new Date(timestamp);
        return d.toLocaleDateString('en-US', {day:"2-digit", month:"2-digit", year:"numeric"});
    };

    console.log(date(props.activeVideo.timestamp))


    return(
       <div className="title">

            <h2 className="title__heading">{props.activeVideo.title}</h2>

            <div className="subtitle">

                <h3 className="subtitle__uploader">By {props.activeVideo.channel}</h3>
                
                <div className='subtitle__views'>
                    <img className="subtitle__views--icon" src={views} alt="viewsicon"></img>
                    <p className="subtitle__views--number">{props.activeVideo.views}</p>
                </div>
                
                <p className="subtitle__uploaddate">{date(props.activeVideo.timestamp)}</p>

                <div className='subtitle__likes'>
                    <img className="subtitle__likes--icon" src={likes} alt="likesicon"></img>
                    <p className="subtitle__likes--number">{props.activeVideo.likes}</p>
                </div>

            </div>
       </div>
    );
}
export default Title;