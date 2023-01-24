import Card from "./Card";
import styles from '../styles/components/articles.module.scss';
import Heading from "./Heading";

const Articles = ({ articles, title}) => {
    const leftArticlesCount = Math.ceil(articles.length / 5);

    function byDate(field) {
        return (a, b) => a[field] > b[field] ? 1 : -1;
    }
    let sortedArticles = articles.sort(byDate("createdAt"));
    return (
        <div className={styles.blog}>
            <Heading tag="h1" text={title} theme="dark" align="center" />
            {
                sortedArticles != null ?
                <div className={`${styles.__list} ${styles.__list}`}>
                    {
                        sortedArticles.map((article) => {
                            return (
                                <Card
                                    article={article}
                                    key={`article__left__${article.attributes.slug}`}
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

export default Articles;