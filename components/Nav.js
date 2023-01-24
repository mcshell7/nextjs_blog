import MyLink from "./MyLink.js";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/components/nav.module.scss"

const Nav = ({headerNav}) => {
    const { pathname } = useRouter();



    return (
        <ul className="menu list">
            {
                headerNav != null ?
                headerNav.map((item) => {
                    return (
                        <li key={item.id} className="menu__list-item">
                            <Link legacyBehavior href={item.attributes.slug}>
                                <a className={pathname === item.attributes.slug ? "active" : null }>{item.attributes.title}</a>
                            </Link>
                        </li>
                    );
                })
                    :
                    ""
            }
        </ul>
    );
};

export default Nav;

