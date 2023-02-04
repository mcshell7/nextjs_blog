import styles from "../styles/footer.module.scss";
import cx from "classnames";
import Logo from "./Logo";
import Nav from "./Nav";
import Heading from "./Heading";
import SubTitle from "./SubTitle";
import Social from "./Social";

const Footer = ({ navMenu }) => {

    // console.log(navMenu);
    const navService = [
        {
            id: 1,
            attributes: {
                title: "CSS",
                slug: "/category/css"
            }
        },
        {
            id: 2,
            attributes: {
                title: "Tools",
                slug: "/category/tools"
            }
        },
        {
            id: 3,
            attributes: {
                title: "React",
                slug: "/category/react"
            }
        },
    ];



    return (
        <footer
            className={
                cx(
                    { [`${'footer'} ${styles.footer}`]: true}
                )
        }>
            <div className="container">
                <div className={styles.inner}>
                    <div className="footer__top footer--flex">
                        <div className="footer__top-item">
                            <Logo />
                        </div>
                        <div className="footer__top-item">
                            <SubTitle text="Menu" align="left" tag="h4" />
                            <Nav navMenu={navMenu} />
                        </div>
                        <div className="footer__top-item">
                            <SubTitle text="Blog" align="left" tag="h4" />
                            <Nav navMenu={navService} />
                        </div>
                        <div className="footer__top-item">
                            <div className="social">
                                <Social />
                            </div>
                        </div>
                    </div>
                    <div className="footer__bottom">
                        <div className={styles.flex}>
                            <p className={styles.copyright}>
                                Copyright © 2022 Laaqiq. All Rights Reserved.
                            </p>
                            <ul className={styles.nav}>
                                <li><a href="#">Terms of Use</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;