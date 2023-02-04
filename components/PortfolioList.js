import Heading from "./Heading";
import PortfolioCard from "./PortfolioCard";

const PortfolioList = ({ items, title}) => {
    const leftArticlesCount = Math.ceil(items.length / 5);

    function byDate(field) {
        return (a, b) => a[field] > b[field] ? 1 : -1;
    }
    let sortedItems = items.sort(byDate("createdAt"));

    return (
        <div className="">
            <Heading tag="h1" text={title} theme="dark" align="center" />
            {
                items != null ?
                    <div className="grid gap-sm grid-2-col">
                        {
                            items.map((item) => {
                                return (
                                    <PortfolioCard
                                        item={item}
                                        key={item.attributes.slug}
                                    />
                                );
                            })
                        }
                    </div>
                    :
                    ""
            }
        </div>
    );
};

export default PortfolioList;