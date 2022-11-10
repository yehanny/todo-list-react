export const TaskEdit = (props) => {
  return (
    <form className="stack-small" onSubmit={props.handleSubmit}>
      <div className="form-group">
        <label className="todo-label" htmlFor={props.id}>
          New name for {props.name}
        </label>
        <input id={props.id} className="todo-text" type="text" value={props.newName} onChange={props.handleChange} />
      </div>
      <div className="btn-group">
        <button type="button" className="btn todo-cancel" onClick={() => props.setEditing(false)}>
          Cancel
          <span className="visually-hidden">renaming {props.name}</span>
        </button>
        <button type="submit" className="btn btn__primary todo-edit">
          Save
          <span className="visually-hidden">new name for {props.name}</span>
        </button>
      </div>
    </form>
  );
};
