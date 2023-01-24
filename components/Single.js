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


const Single = ({single}) => {
    console.log(single.imgUrl);
    return (
        <article className={styles.single}>
            <div className="container">
                <div className={styles.information}>
                    <div className={styles.back}>
                        <FontAwesomeIcon icon={solid('chevron-left')} />
                        <MyLink text={`Back to ${single.backTo}s`} href={`/${single.backTo}`} />
                    </div>
                    <Heading text={single.title} theme="dark" />
                    <div className={styles.author}>
                        <div className={styles.author__img}>
                            <GetImage data={single.authorImg}/>
                        </div>
                        <div className={styles.author__name}>
                            { single.authorName }
                        </div>
                        <div className={styles.date}>
                            <DateUi myDate={single.date} />
                        </div>
                        <div className={styles.reading__date}>
                            <ReadingTime content={single.content} />
                        </div>

                    </div>
                </div>
                <div className={styles.img_block}>
                    <LightGallery
                        speed={500}
                        plugins={[lgThumbnail, lgZoom]}
                        mode="lg-fade"
                    >
                        <Link legacyBehavior href={single.imgUrl}>
                            <a>
                                <GetImage data={single.img}/>
                            </a>
                        </Link>
                    </LightGallery>
                </div>
                <div className={styles.content} dangerouslySetInnerHTML={{ __html: single.content }}>
                </div>
            </div>
        </article>
    );
};
export default Single;