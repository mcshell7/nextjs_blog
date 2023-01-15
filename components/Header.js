// import DarkModeBtn from "../dark-mode-btn";
import Nav from "./Nav";
import MyLink from "./MyLink";
import Button from "./UI/Button";

const Header = ({ headerClass, headerNav }) =>{

    return(
        <header className={`header ${headerClass}`}>
            <div className="container">
                <nav className="header__inner">
                    <div className="logo">
                        <MyLink text="hamadev" href="/" className="link" />
                    </div>
                    <Nav headerNav={headerNav}/>
                    <Button text="Contacts" type="white" href={'/contacts'}/>
                </nav>
            </div>
        </header>
    );
}


export default Header;