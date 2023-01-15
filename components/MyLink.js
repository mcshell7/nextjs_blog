import Link from "next/link";

const MyLink = ({text, href, className, color}) => {
    return (
        <Link legacyBehavior href={href}>
            <a className={className}  style={{color: color !== "" ? color : ""}}>{text}</a>
        </Link>
    );
};

export default MyLink;