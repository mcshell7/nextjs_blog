import styles from '../../styles/components/button.module.scss';
import cx from 'classnames';
const Button = ({text, href, theme, typeSubmit, classNames, target}) => {


    const colorType = (theme) => {
        if (theme === 'white'){
            return styles.white;
        }
        else if (theme === 'light secondary') {
            return  styles.light_primary;
        } else {
            return styles.light_primary
        }
    }



    return (
        // <a
        //     href={href}
        //     className={
        //         cx(
        //             ({ [`${styles.button} ${colorType(theme)}`]: true })
        //         )
        //     }
        // >
        //     {text}
        // </a>
        <>
            {typeSubmit ? (
                <button
                    type="submit"
                    className={
                        cx(
                            ({ [`${classNames} ${styles.button} ${colorType(theme)}`]: true })
                        )
                    }
                >
                    {text}
                </button>
            ) : (
                <a
                    href={href}
                    className={
                        cx(
                            ({ [`${styles.button} ${colorType(theme)}`]: true })
                        )
                    }
                    target={target}
                >
                    {text}
                </a>
            )}
        </>
    );
};

export default Button;