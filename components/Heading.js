import styles from "../styles/heading.module.scss";

const Heading = ({tag, text, theme, align }) => {
    const Tag = tag || "h1";
    const Theme = theme || "light";
    const Align = align || "left";

    return (
        <Tag className={`${styles.heading} ${Tag} ${Theme} ${Align}` }  >
            {text}
        </Tag>
    );
};

export default Heading;