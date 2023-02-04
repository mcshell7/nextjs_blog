import Heading from "./Heading";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import {getStrapiMedia} from "../lib/media";
import GetImage from "./GetImage";

const AboutSection = ({about}) => {

    const content = {
        text: about.attributes.descr,
        title: about.attributes.title,
        img: about.attributes.image
    }

    return (
        <section className="section section-about light">
            <div className="container">
                <div className="inner flex">
                    <div className="left">
                        {content.title ? <Heading text={content.title} theme="dark" tag="h2" /> : null }
                        {/*<Heading tag="h2" align="left" theme="dark" text="About Me" />*/}
                        {content.text ?  <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content.text}</ReactMarkdown> : null }
                    </div>

                    <div className="right">
                        <div className="img">
                            <GetImage data={content.img}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;