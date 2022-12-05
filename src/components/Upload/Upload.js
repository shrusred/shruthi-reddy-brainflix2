import uploaddp from '../../assets/Icons/upload.svg';
import '../Upload/Upload.scss'
function Upload(){
    return(
       <div className="upload">
            <button className="upload__button" type="submit">UPLOAD</button>
            <img src={uploaddp} alt="uploadicon" className="upload__icon"></img>
       </div>
    );
}
export default Upload;