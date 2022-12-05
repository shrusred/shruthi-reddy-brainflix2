import '../Description/Description.scss'
import '../../styles/partials/_mixins.scss'
function Description(props){
    console.log("props.activeVideo:",props.activeVideo)
    console.log("description:",props.activeVideo.description)
    return(
       <div className="desc">
            <p>
                {props.activeVideo.description}
            </p>
       </div>
    );
}
export default Description;