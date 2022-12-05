import '../Row/Row.css';
function Row(){
    return(
        <div className="row">
            <input className="row__search" type="text" id="search" name="search" placeholder="Search"/>
            <div className="row__displaypicbox"></div>
       </div>

    );
}
export default Row;