import styles from "../../styles/components/accordion.module.scss";
import {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    solid,
    regular,
    brands,
    icon
} from '@fortawesome/fontawesome-svg-core/import.macro';


const dataCollection = [
    {
        question: 'A digital agency is a business',
        answer: 'Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.'
    }, {
        question: '2 Why Do You Want to Work at This Company?',
        answer: '2 Fusce et imperdiet ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras ipsum erat, ullamcorper nec bibendum aliquam, commodo ac enim. In a aliquet enim, nec vehicula ligula. Aenean non magna sapien. Integer vel massa vulputate, varius nunc nec, malesuada arcu. '
    }, {
        question: '3 Are Your Greatest Strengths?',
        answer: '3 Fusce et imperdiet ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras ipsum erat, ullamcorper nec bibendum aliquam, commodo ac enim. In a aliquet enim, nec vehicula ligula. Aenean non magna sapien. Integer vel massa vulputate, varius nunc nec, malesuada arcu. '
    }, {
        question: '4 Can You Explain Why You Changed Career Paths?',
        answer: '4 Fusce et imperdiet ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras ipsum erat, ullamcorper nec bibendum aliquam, commodo ac enim. In a aliquet enim, nec vehicula ligula. Aenean non magna sapien. Integer vel massa vulputate, varius nunc nec, malesuada arcu. '
    }
];







const Accordion = () => {

    const [accordion, setActiveAccordion] = useState(1);

    function toggleAccordion(index){
        if (index === accordion ){
            setActiveAccordion(-1);
            return;
        }
        setActiveAccordion(index);
    }
    function chooseIcon(index) {
        return accordion === index ? solid('caret-up') : solid('caret-down');
    }
    console.log(chooseIcon(1));
    return (
        <div className={styles.accordion}>
            <div className={styles.list}>
                {dataCollection.map((item, index) => (
                <div key={index} onClick={()=> toggleAccordion(index)} className={`${styles.item} ${accordion === index ? styles.active : ""}`}>
                    <div className={styles.top} >
                        <div className={styles.title}>
                            {item.question}
                        </div>
                        <div className={styles.btn}>
                            <FontAwesomeIcon icon={chooseIcon(index)} />
                        </div>
                    </div>
                    <div className={`${styles.bottom} ${accordion === index ? styles.active : styles.innactive}`}>
                        <div className={styles.text}>
                            {item.answer}
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
};

export default Accordion;