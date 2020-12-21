// Create function
function FormGroup(props) {
    return (
        <div>
            <label htmlFor={props.label}>{props.display}</label>
            <input
                type={props.type}
                name={props.label}
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    )
}

// Export function
export default FormGroup