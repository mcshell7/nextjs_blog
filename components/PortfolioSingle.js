import styles from "../styles/components/single.module.scss";
import Heading from "./Heading";
import ReactMarkdown from "react-markdown";
import MyLink from "./MyLink";
import GetImage from "./GetImage";

const PortfolioSingle = ({item}) => {
    return (
        <article className={styles.single}>
            <div className="container">
                <MyLink text={`Back to ${item.backTo}`} href={`/${item.backTo}`} />
                <div className={styles.information}>
                    <Heading text={item.title} theme="dark" />
                </div>
                <div className={styles.img_block}>
                    <GetImage data={item.img}/>
                </div>
                <div className={styles.content}>
                    <ReactMarkdown children={item.content} />
                </div>
            </div>
        </article>
    );
};

export default PortfolioSingle;