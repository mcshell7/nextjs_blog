import styles from '../styles/components/card.module.scss';
import Button from "./UI/Button";
import GetImage from "./GetImage";


const PortfolioCard = ({ item }) => {

    const itemProps = {
        title: item.attributes.name,
        date: item.attributes.createdAt,
        author: item.attributes.name,
        img: item.attributes.image,
        slug: item.attributes.slug
    }

    const myDate = itemProps.date;
    function formatMyDate(value, locale = 'en-US') {
        return new Date(value).toLocaleDateString(locale);
    }
    return (
        <div className={styles.card}>
            <a className={styles.img} href={`/portfolio/${itemProps.slug}`}>
                <GetImage data={itemProps.img}/>
            </a>
            <div className={styles.content}>
                <h2 className={styles.title}>
                    <a href={`/portfolio/${itemProps.slug}`}>
                        {itemProps.title}
                    </a>
                </h2>
                <div className="cv__post__item-date date-mc">
                    <span>
                        {formatMyDate(myDate)}
                    </span>
                </div>
                {/*<div className={styles.description}>*/}
                {/*    <p>{item.attributes.content}</p>*/}
                {/*    /!*<Button text="View More" href={`/item/${item.attributes.slug}`}/>*!/*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default PortfolioCard;