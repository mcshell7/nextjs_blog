import NextImage from "./image";
import styles from '../styles/components/card.module.scss';
import Button from "./UI/Button";


const PortfolioCard = ({ item }) => {



    const myDate = item.attributes.createdAt;
    function formatMyDate(value, locale = 'en-US') {
        return new Date(value).toLocaleDateString(locale);
    }
    return (
        <div className={styles.card}>
            <div className={styles}>
                <div className={styles.img}>
                    <a href={`/portfolio/${item.attributes.slug}`}>
                        <NextImage image={item.attributes.image} />
                    </a>
                </div>
                <div className="cv__post__item-media">
                    <div className="cv__post__item-date date-mc">
                                <span>
                                    {formatMyDate(myDate)}
                                </span>
                    </div>
                </div>
                <div className={styles.category}>
                    {item.attributes.client}
                </div>

                <div>
                    <h2 className={styles.title}>
                        <a href={`/portfolio/${item.attributes.slug}`}>
                            {item.attributes.title}
                        </a>
                    </h2>
                    <div className={styles.description}>
                        <p>{item.attributes.description}</p>
                        {/*<Button text="View More" href={`/item/${item.attributes.slug}`}/>*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioCard;