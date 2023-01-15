import cx from "classnames";
import styles from "../styles/footer.module.scss";
import Heading from "./Heading";
import SubTitle from "./SubTitle";

const SectionHeader = (props) => {
    return (
        <div className={
            cx(
                { [`${props.addSectionClass} ${'section-header'} ${styles.footer}`]: true}
            )
        }>
            <SubTitle text={props.subtitelText} theme="red" tag="div" align={props.align} />
            <Heading tag={props.tag} text={props.headingText} theme={props.theme} align={props.align}/>
        </div>
    );
};

export default SectionHeader;