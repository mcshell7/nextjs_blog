import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    solid,
    regular,
    brands,
    icon
} from '@fortawesome/fontawesome-svg-core/import.macro';
import Link from "next/link";

const Social = () => {

    const list = [
        {
            id: 1,
            attributes: {
                icon: brands('github'),
                link: "https://github.com/mcshell7"
            }
        },
        {
            id: 2,
            attributes: {
                icon: brands('linkedin'),
                link: "https://www.linkedin.com/in/michael-khamardiuk/"
            }
        },
        {
            id: 3,
            attributes: {
                icon: brands('instagram'),
                link: "https://instagram.com/khamardiuk7"
            }
        },

    ];

    return (
        <ul className="social__list">
            {/*<li>*/}
            {/*    <a className="social__item" href="https://github.com/mcshell7">*/}
            {/*        <FontAwesomeIcon icon={brands('github')} />*/}
            {/*    </a>*/}
            {/*</li>*/}

            {/*<li>*/}
            {/*    <a href="#">*/}
            {/*        <FontAwesomeIcon icon={brands('linkedin')} />*/}

            {/*    </a>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*    <a href="#">*/}
            {/*        <FontAwesomeIcon icon={brands('instagram')} />*/}

            {/*    </a>*/}
            {/*</li>*/}
            {
                list != null ?
                    list.map((item) => {
                        return (
                            <li className="social__item" key={item.id}>
                                <a className="social__item-link" href={item.attributes.link} target="_blank">
                                    <FontAwesomeIcon icon={item.attributes.icon} />
                                </a>
                            </li>

                            // <li key={item.id} className="menu__list-item">
                            //     <Link legacyBehavior href={item.attributes.slug}>
                            //         <a className={pathname === item.attributes.slug ? "active" : null }>{item.attributes.title}</a>
                            //     </Link>
                            // </li>
                        );
                    })
                    :
                    ""
            }
        </ul>
    );
};

export default Social;