
const DateUi = ({ myDate }) => {

    const options = {
        year: "numeric",
        month: "short",
        day: "numeric",
    };

    return (
        <div className="typed-date">
            <span>
               { new Date(myDate).toLocaleDateString('en-US', options) }
            </span>
        </div>
    )
};

export default DateUi;