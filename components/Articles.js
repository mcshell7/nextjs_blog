import Card from "./Card";
import styles from '../styles/components/articles.module.scss';
import Heading from "./Heading";
import {useMemo, useState} from "react";
import Pagination from './UI/Pagination';

let PageSize = 6;


const Articles = ({ articles, title}) => {
    const leftArticlesCount = Math.ceil(articles.length / 5);

    function byDate(field) {
        return (a, b) => a[field] > b[field] ? 1 : -1;
    }
    let sortedArticles = articles.sort(byDate("createdAt"));


    // Pagination start


    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return sortedArticles.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    // Pagination end







    return (
        <div className={styles.blog}>
            <Heading tag="h1" text={title} theme="dark" align="center" />
            {
                currentTableData != null ?
                <div className={`${styles.__list} ${styles.__list}`}>
                    {
                        currentTableData.map((article) => {
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
            <div>
                <Pagination
                    className="pagination-bar"
                    currentPage={currentPage}
                    totalCount={sortedArticles.length}
                    pageSize={PageSize}
                    onPageChange={page => setCurrentPage(page)}
                />
            </div>
        </div>


    );
};

export default Articles;