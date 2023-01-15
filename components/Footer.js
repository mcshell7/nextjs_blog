import styles from "../styles/footer.module.scss";
import cx from "classnames";

const Footer = (classNames) => {

    return (
        <footer
            className={
                cx(
                    { [`${'footer'} ${styles.footer}`]: true}
                )
        }>
            <div className="container">
                <div className={styles.inner}>
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
        </footer>
    );
};

export default Footer;