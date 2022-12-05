import '../Comments/Comments.css';
function Comments(props){
    console.log("this is inside comments:",props.activeVideo.comments)
    function date(timestamp) {
        const d = new Date(timestamp);
        return d.toLocaleDateString('en-US', {day:"2-digit", month:"2-digit", year:"numeric"});
    };
   const comm = props.activeVideo.comments.map((c)=>{
       
        return (
        <div key={c.id} className="comments">
            <div className="comments__displaypic"></div>
            <p className="comments__name">{c.name}</p>
            <p className="comments__timestamp">{date(c.timestamp)}</p>
            <p className="comments__comment">{c.comment}</p>
        </div>
        )
    })
    return(comm);
}
export default Comments;