import styles from "../styles/components/single.module.scss";
import Heading from "./Heading";
import ReactMarkdown from "react-markdown";
import MyLink from "./MyLink";
import GetImage from "./GetImage";


const Single = ({single}) => {
    return (
        <article className={styles.single}>
            <div className="container">
                <MyLink text={`Back to ${single.backTo}s`} href={`/${single.backTo}`} />
                <div className={styles.information}>
                    <Heading text={single.title} theme="dark" />
                </div>
                <div className={styles.img_block}>
                    <GetImage data={single.img}/>
                    {/*<img*/}
                    {/*            src={single.img} alt=""*/}
                    {/*            id="banner"*/}
                    {/*            className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"*/}
                    {/*            data-src={single.img}*/}
                    {/*            data-srcset={single.img}*/}
                    {/*            data-uk-img*/}
                    {/*        />*/}
                </div>
                <div className={styles.content}>
                    <ReactMarkdown children={single.content} />
                </div>
            </div>


        </article>
    );
};

export default Single;