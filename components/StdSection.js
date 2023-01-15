import NextImage from "./image";
import Heading from "./Heading";
import {getStrapiMedia} from "../lib/media";
import ReactMarkdown from "react-markdown";

const StdSection = ({button, subtitle, image , text, title }) => {


    return (
        <section className="first__screen section dark ">
            <div className="container">
                <div className="first__screen-inner section-flex">
                    <div className="first__screen-content">
                        <p className="first__screen-subtitle section-subtitle">
                            {subtitle}
                        </p>
                        <Heading text={title} />
                        <div className="first__screen-text">
                            <ReactMarkdown children={text} />
                        </div>
                            {button}
                    </div>
                    <div className="first__screen-img">
                        {/*<NextImage image={image} />*/}
                        <img
                            src={image}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StdSection;