import Nav from "./Nav";
import MyLink from "./MyLink";
import Button from "./UI/Button";
import { useEffect, useState } from "react";
import useScrollListener from "../hooks/useScrollListener";
import Logo from "./Logo";

const Header = ({ headerClass, navMenu }) =>{
    const [navClassList, setNavClassList] = useState([]);
    const scroll = useScrollListener();

    // update classList of nav on scroll
    useEffect(() => {
        const _classList = [];

        if (scroll.y > 150 && scroll.y - scroll.lastY > 0){
            _classList.push("hidden");
        }else if (scroll.y > 150) {
            _classList.push("move");
        }
        setNavClassList(_classList);
    }, [scroll.y, scroll.lastY]);

    return(
        <header className={`header ${headerClass} ${navClassList.join(" ")}`} >
            <div className="container">
                <nav className="header__inner">
                    <Logo />
                    <Nav navMenu={navMenu}/>
                    <Button text="Resume" type="white" href={'../MykhailoKhamardiuk.pdf'} target="_blank" />
                </nav>
            </div>
        </header>
    );
}


export default Header;