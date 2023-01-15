import Heading from "./Heading";
import SubTitle from "./SubTitle";
import MyLink from "./MyLink";
import SectionHeader from "./SectionHeader";

const HeroStyleOne = () => {
    return (
        <div className="hero__style">
            <SectionHeader addSectionClass="test" subtitelText="subtitelText" align="right" headingText="Frequently Asked Questions" theme="light" align="left" tag="h3" />
            {/*<SubTitle text="FAQ" theme="red" tag="b" align="left" />*/}
            {/*<Heading text="Frequently Asked Questions" theme="light" align="left" tag="h3" />*/}
            <p>
                A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.
            </p>
            <MyLink text="Contacts" href="/contacts" color="white"/>
        </div>
    );
};

export default HeroStyleOne;