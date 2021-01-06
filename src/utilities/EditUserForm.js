function EditUserForm(props) {
    return(
        <form className="form-small">
            {/* <label>Name</label> */}
            <input 
            type="text"
            value={props.userName}
            onChange={(e) => props.setUserName(e.target.value)}
            />
        </form>
    );
}

export default EditUserForm;