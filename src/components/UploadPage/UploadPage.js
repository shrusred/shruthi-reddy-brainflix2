import Header from "../Header/Header";
import Row from "../Row/Row.js";
import Upload from "../Upload/Upload";
import "../UploadPage/UploadPage.scss";

function UploadPage() {
  return (
    <>
      <div className="uploadpage">
        <h1 className="uploadpage__title">Upload Video</h1>
        <h3 className="uploadpage__thumbnail">VIDEO THUMBNAIL</h3>
        <video
          className="uploadpage__video"
          controls
          poster="https://i.imgur.com/l2Xfgpl.jpg"
        ></video>

        <form className="uploadpage__form">
          <label className="uploadpage__form--label" for="title">
            TITLE YOUR VIDEO
          </label>
          <input
            className="uploadpage__form--input1"
            type="text"
            id="addtitle"
            name="addtitle"
            placeholder="Add a title to your video"
          ></input>
          <label className="uploadpage__form--label" for="desc">
            ADD A VIDEO DESCRIPTION
          </label>
          <input
            className="uploadpage__form--input2"
            type="text"
            id="adddesc"
            name="adddesc"
            placeholder="Add a description to your video"
          ></input>
          <button className="uploadpage__form--button" type="submit">
            PUBLISH
          </button>
        </form>

        <h2 className="uploadpage__cancel">CANCEL</h2>
      </div>
    </>
  );
}
export default UploadPage;
