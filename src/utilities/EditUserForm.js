function EditUserForm(props) {
    return (
        <form className="form-small">
            <input 
                type="text"
                value={props.userName}
                onChange={(e) => props.setUserName(e.target.value)}
            />
        </form>
    )
}

export default EditUserForm