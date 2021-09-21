const FormFieldInput = function (props) {

    return (
        <input
            type={props.type}
            id={props.id}
            name={props.name}
            placeholder={props.placeholder}
            minLength={props.minLength}
            maxLength={props.maxLength}
        />
    )
}
export default FormFieldInput;

