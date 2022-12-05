import '../Header/Header.css';
import brainflixlogo from '../../assets/Logo/BrainFlix-logo.svg';

function Header(){
    return(
        <header className="header">
            <img className="header__logo" src={brainflixlogo} alt="brainflixlogo"></img>
        </header>

    );
}
export default Header;

