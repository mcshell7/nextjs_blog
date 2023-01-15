import MyLink from "./MyLink.js";
import {fetchAPI} from "../lib/api";


const Nav = ({headerNav}) => {

    console.log(headerNav);




    return (
        <ul className="menu list">
                {headerNav.map((item) => {
                return (
                    <li key={item.id} className="menu__list-item">
                        <MyLink href={item.attributes.slug} text={item.attributes.title} />
                    </li>
                );
            })}
        </ul>
    );
};



export default Nav;

