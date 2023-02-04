import {Component} from "react";
import styles from "../styles/components/single.module.scss";
import Heading from "./Heading";
import MyLink from "./MyLink";
import GetImage from "./GetImage";
import DateUi from "./UI/DateUi";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    solid,
    regular,
    brands,
    icon
} from '@fortawesome/fontawesome-svg-core/import.macro';
import ReadingTime from "./UI/ReadingTime";

// Light Gallery
import LightGallery from 'lightgallery/react';
// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import Link from "next/link";
// import styles
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

class Single extends Component {


    componentDidMount() {
        Prism.highlightAll();
    }
    checkImg(data) {
        if (data.imgUrl !== null) {
            return (
                <div className={styles.img_block}>
                    <LightGallery
                        speed={500}
                        plugins={[lgThumbnail, lgZoom]}
                        mode="lg-fade"
                    >

                        <Link legacyBehavior href={data.imgUrl}>
                            <a>
                                <GetImage data={data.img}/>
                            </a>
                        </Link>
                    </LightGallery>
                </div>
            );
        }
        else {
            return (
                <div className={styles.img_block}>
                    <GetImage data={data.imgUrl}/>
                </div>
            );
        }
    }

    render() {
        const { single } = this.props;

        return (
            <article className={styles.single}>
                <div className="container">
                    <div className={styles.information}>
                        <div className={styles.back}>
                            <FontAwesomeIcon icon={solid('chevron-left')}/>
                            <MyLink text={`Back to ${single.backTo}s`} href={`/${single.backTo}`}/>
                        </div>
                        <Heading text={single.title} theme="dark"/>
                        <div className={styles.author}>
                            <div className={styles.author__img}>
                                <GetImage data={single.authorImg}/>
                            </div>
                            <div className={styles.author__name}>
                                {single.authorName}
                            </div>
                            <div className={styles.date}>
                                <DateUi myDate={single.date}/>
                            </div>
                            <div className={styles.reading__date}>
                                <ReadingTime content={single.content}/>
                            </div>
                        </div>
                    </div>


                    {this.checkImg(single)}
                    <div className={styles.content} dangerouslySetInnerHTML={{__html: single.content}}>
                    </div>
                    <div className="related">
                        <div className="related__items grid grid-2-col gap-2">
                            { single.previousPost != null ?
                                <div className="related__item">
                                    <a className="related__title" href={`/article/${single.previousPost.attributes.slug}`}>
                                        <span className="related__icon related__icon-prev"><FontAwesomeIcon icon={solid('chevron-left')}/></span>
                                        {single.previousPost.attributes.title}
                                    </a>
                                    <div className="related__img">
                                        <Link legacyBehavior href={`/article/${single.previousPost.attributes.slug}`}>
                                            <a>
                                                {/*<GetImage data={single.previousPost.attributes.image}/>*/}
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                : null }
                            { single.nextPost != null ?
                                <div className="related__item">
                                    <a className="related__title" href={`/article/${single.nextPost.attributes.slug}`}>
                                        {single.nextPost.attributes.title}
                                        <span className="related__icon related__icon-next"><FontAwesomeIcon icon={solid('chevron-right')}/></span>

                                    </a>
                                    <div className="related__img">
                                        <Link legacyBehavior href={`/article/${single.nextPost.attributes.slug}`}>
                                            <a>
                                                {/*<GetImage data={single.nextPost.attributes.image}/>*/}
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                : null }
                        </div>
                    </div>
                </div>
            </article>
        );
    }
};
export default Single;