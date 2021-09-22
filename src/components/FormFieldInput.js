import PropTypes from "prop-types";

const FormFieldInput = function (props) {

    return (
        <input
            className="form-field-input"
            type={props.type}
            id={props.id}
            name={props.name}
            placeholder={props.placeholder}
            minLength={props.minLength}
            maxLength={props.maxLength}
            pattern={props.regx}
            title={props.title}
            required
        />
    )
}

FormFieldInput.propTypes = {
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string,
    placeholder: PropTypes.string,
    minLength: PropTypes.string,
    maxLength: PropTypes.string
}

export default FormFieldInput;

