import { useNavigate, Link } from "react-router-dom";
import uploaddp from "../../assets/Icons/upload.svg";
import "../Upload/Upload.scss";

function Upload() {
  let navigate = useNavigate();
  function handleNav() {
    navigate("/videos/upload");
  }

  return (
    <div onClick={handleNav} className="upload">
      {/* <div className="upload">   */}
      <button className="upload__button" type="submit">
        UPLOAD
      </button>
      <img src={uploaddp} alt="uploadicon" className="upload__icon"></img>
    </div>
  );
}
export default Upload;

// function Upload(){

//     return(
//         <Link to='/videos/upload'>
//             <div className="upload">

//                     <button className="upload__button" type="submit">UPLOAD</button>
//                     <img src={uploaddp} alt="uploadicon" className="upload__icon"></img>

//             </div>
//             </Link>
//     );
// }
// export default Upload;
