import styles from "../styles/heading.module.scss";

const Heading = ({tag, text, theme, align, className }) => {
    const Tag = tag || "h1";
    const Theme = theme || "light";
    const Align = align || "left";

    return (
        <Tag className={`${styles.heading} ${Tag} ${Theme} ${Align} ${className}` }  >
            {text}
        </Tag>
    );
};

export default Heading;