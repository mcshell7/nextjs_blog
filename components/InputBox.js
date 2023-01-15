const InputBox = ({tagName, type, name, placeholder, values, handleChange}) => {

    return (
        <>
            <input
                className='form-input'
                type={type}
                name={name}
                placeholder={placeholder}
                value={values}
                onChange={handleChange}
            />
        </>
    );
};

export default InputBox;