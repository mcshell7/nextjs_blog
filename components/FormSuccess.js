import Heading from "./Heading";
import Button from "./UI/Button";

const FormSuccess = () => {
    return (
        <div className="form__content-left">
            <div className="form__success">
                <Heading text="We have received your request!" tag="h2" theme="dark" />
                <p>Thank You!</p>
            </div>
        </div>
    );
};

export default FormSuccess;