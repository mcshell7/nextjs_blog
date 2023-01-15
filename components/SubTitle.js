const SubTitle = ({tag, text, theme, align }) => {
    const Tag = tag || "p";
    const Theme = theme || "red";
    const Align = align || "left";

    return (
        <Tag className={`SubTitle ${Tag} ${Theme} ${Align}` }  >
            {text}
        </Tag>
    );
};

export default SubTitle;