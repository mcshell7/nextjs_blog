import Form from "./Form";
import Heading from "./Heading";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    solid,
    regular,
    brands,
    icon
} from '@fortawesome/fontawesome-svg-core/import.macro';
import MyLink from "./MyLink";

const ContactSection = () => {
    return (
        <section className="contact section dark">
            <div className="container">
                <div className="flex">
                    <div className="contact__left flex--50 flex-left">
                        <Form />
                    </div>
                    <div className="contact__right flex--50 flex-right">
                        <p className="section-subtitle dark" >Contact</p>
                        <Heading text="Contact Me" />
                        <div className="contact__info">
                            <ul className="contact__info-list">
                                <li className="contact__info-item">
                                    <div className="contact__info-icon">
                                        <FontAwesomeIcon className="icon" icon={solid('map-location-dot')} />
                                    </div>
                                    <p className="contact__info-text">
                                        Fort Mill, SC 29707
                                    </p>
                                </li>
                                <li className="contact__info-item">
                                    <div className="contact__info-icon">
                                        <FontAwesomeIcon className="icon" icon={solid('phone')} />
                                    </div>
                                    <p className="contact__info-text">
                                        <MyLink href="tel:+17049645488" text="+1 (704) 964-54-88" className="link--white" />
                                    </p>
                                </li>
                                <li className="contact__info-item">
                                    <div className="contact__info-icon">
                                        <FontAwesomeIcon className="icon" icon={solid('envelope')} />
                                    </div>
                                    <p className="contact__info-text">
                                        <MyLink href="mailto: michaelkhamardiuk@gmail.com" text="michaelkhamardiuk@gmail.com" className="link--white" />
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;