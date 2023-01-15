import NextImage from "./image";
import styles from '../styles/components/card.module.scss';
import Button from "./UI/Button";
import GetImage from "./GetImage";


const Card = ({ article }) => {

    const articleData = article.attributes.category.data;
    const checkingData = (checkObject) => {

        if (checkObject !== null) {
            return '<div className={styles.category>'
                +
                articleData.attributes.name
                +
                '</div>';
        }
    }
    const catName = checkingData(articleData);
    const myDate = article.attributes.createdAt;


    function renderElement(checkObject){
        if(checkObject !== null)
            return <div className={styles.category}> {articleData.attributes.name}</div>;
        return null;
    }


    function formatMyDate(value, locale = 'en-US') {
        return new Date(value).toLocaleDateString(locale);
    }


    return (
                <article className={styles.card}>
                    <a className={styles.img} href={`/article/${article.attributes.slug}`}>
                        {/*<NextImage image={article.attributes.image} />*/}
                        <GetImage data={article}/>

                    </a>
                    <div className={styles.content}>
                        { renderElement(articleData) }
                            <h2 className={styles.title}>
                                <a href={`/article/${article.attributes.slug}`}>
                                    {article.attributes.title}
                                </a>
                            </h2>
                            {/*<div className={styles.description}>*/}
                            {/*    <p>{article.attributes.description}</p>*/}
                            {/*    /!*<Button text="View More" href={`/article/${article.attributes.slug}`}/>*!/*/}
                            {/*</div>*/}
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