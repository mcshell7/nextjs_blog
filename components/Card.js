import styles from '../styles/components/card.module.scss';
import GetImage from "./GetImage";

const Card = ({ article }) => {

    console.log(article.attributes.image);

    const itemProps = {
        title: article.attributes.title,
        // date: article.attributes.category.data,
        author: article.attributes.name,
        img: null,
        slug: article.attributes.slug
    }
    // img check 
    if (article.attributes.image.data !== null){
        itemProps.img = article.attributes.image;
    }

    const articleData = article.attributes.category.data;

    const myDate = article.attributes.createdAt;

    function renderElement(checkObject){
        if(checkObject !== null)
            return <div className={styles.category}><a href={`/category/${articleData.attributes.slug}`} className="btn--radius btn--white">{articleData.attributes.name}</a></div>;
        return null;
    }

    function formatMyDate(value, locale = 'en-US') {
        return new Date(value).toLocaleDateString(locale);
    }

    return (
                <article className={styles.card}>
                    <a className={styles.img} href={`/article/${itemProps.slug}`}>
                        <GetImage data={itemProps.img}/>
                    </a>
                    <div className={styles.content}>
                        { renderElement(articleData) }
                        <h2 className={styles.title}>
                            <a href={`/article/${itemProps.slug}`}>
                                {itemProps.title}
                            </a>
                        </h2>
                        <div className="cv__post__item-media">
                            <div className="typed-date">
                                <span>
                                    {formatMyDate(myDate)}
                                </span>
                            </div>
                        </div>
                    </div>
                </article>
    );
};

export default Card;