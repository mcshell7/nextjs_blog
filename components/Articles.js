import Card from "./Card";
import styles from '../styles/components/articles.module.scss';
import Heading from "./Heading";

const Articles = ({ articles }) => {
    const leftArticlesCount = Math.ceil(articles.length / 5);

    function byDate(field) {
        return (a, b) => a[field] > b[field] ? 1 : -1;
    }
    articles.sort(byDate("createdAt"));
    return (
        <div className={styles.blog}>
            <Heading tag="h1" text="Blog Articles" theme="dark" align="center" />
            <div className={ `${styles.__list} ${styles.__list}`} >
                    {articles.map((article) => {
                        return (
                            <Card
                                article={article}
                                key={`article__left__${article.attributes.slug}`}
                            />
                        );
                    })}
            </div>
        </div>

    );
};

export default Articles;