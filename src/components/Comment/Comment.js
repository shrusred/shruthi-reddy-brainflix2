import commentadddp from "../../assets/Images/Mohan-muruge.jpg";
import "../Comment/Comment.scss";
import commentaddicon from "../../assets/Icons/add_comment.svg";

function Comment(props) {
  const comments_array = props.activeVideo.comments;
  //console.log(comments_array?.length);
  return (
    <div className="commentadd">
      <h2 className="commentadd__commentlength">
        {comments_array?.length} Comments
      </h2>

      <h2 className="commentadd__title">JOIN THE CONVERSATION</h2>

      <img
        className="commentadd__displaypic"
        src={commentadddp}
        alt="comments_displaypic"
      ></img>

      <form className="commentadd__submitform">
        <input
          className="commentadd__submitform--input"
          type="text"
          id="comment"
          name="comment"
          placeholder="Add a new comment"
        ></input>
        <button className="commentadd__submitform--button" type="submit">
          COMMENT
        </button>
        <img
          className="commentadd__submitform--buttonicon"
          src={commentaddicon}
        ></img>
      </form>
    </div>
  );
}
export default Comment;
