import styles from "../styles/components/portfoliosingle.module.scss";
import Heading from "./Heading";
import ReactMarkdown from "react-markdown";
import MyLink from "./MyLink";


const PortfolioSingle = ({item}) => {
    return (
        <article className={styles.item}>
            <div className="container">
                <MyLink text={`Back to ${item.backTo}`} href={`/${item.backTo}`} />
                <div className={styles.information}>
                    <Heading text={item.title} theme="dark" />
                </div>
                <div className={styles.img_block}>
                    <img
                                src={item.img} alt=""
                                id="banner"
                                className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
                                data-src={item.img}
                                data-srcset={item.img}
                                data-uk-img
                            />
                </div>
                <div className={styles.content}>
                    <ReactMarkdown children={item.content} />
                </div>
            </div>


        </article>
    );
};

export default PortfolioSingle;