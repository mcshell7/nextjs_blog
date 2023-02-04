import { useRouter } from "next/router";
import Link from "next/link";

const Nav = ({navMenu}) => {
    const { pathname } = useRouter();

    return (
        <ul className="menu list">
            {
                navMenu != null ?
                navMenu.map((item) => {
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

