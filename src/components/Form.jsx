import React, { useState } from "react";

const Form = (props) => {
  const [name, setName] = useState("");

  // Handle submit of a new task
  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit(name);
    setName("");
  }

  // Handle input onChange event to update the name state
  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
        <input type="text" id="new-todo-input" className="input input__lg" name="text" autoComplete="off" value={name} onChange={handleChange} placeholder="Add your tag here" />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </h2>
    </form>
  );
};

export default Form;
