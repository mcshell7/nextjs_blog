import ReactMarkdown from 'react-markdown';
import Heading from "./Heading";

const AboutSection = ({about})  => {
    console.log(about.attributes);
    const content = {
        text: about.attributes.descr,
        title: about.attributes.title,
    }

    return (
        <div>
            {/*{ if(content.title) }*/}
            {content.title ? <Heading text={content.title} theme="dark" tag="h1" /> : null }
            {/*<>{about.attributes.title}</>*/}
            <ReactMarkdown>{content.text}</ReactMarkdown>
            {/*<Button href={about.attributes.button.href} text={about.attributes.button.label} className={about.attributes.button.colors}/>*/}
        </div>
    );
};

export default AboutSection;