import readingTime from "reading-time";

const ReadingTime = ({content}) => {
    const stats = readingTime(content);
    return (
        <div className="typed-date">
            <span>
                {stats.text}
            </span>
        </div>
    );
};

export default ReadingTime;