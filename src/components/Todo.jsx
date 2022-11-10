import { useState } from "react";
import { TaskEdit } from "./TaskEdit";
import { TaskView } from "./TaskView";

const Todo = (props) => {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState("");

  function handleChange(e) {
    setNewName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.editTask(props.id, newName);
    setNewName("");
    setEditing(false);
  }

  const editingTemplate = <TaskEdit id={props.id} name={props.name} newName={newName} handleChange={handleChange} handleSubmit={handleSubmit} setEditing={setEditing} />;
  const viewTemplate = <TaskView id={props.id} name={props.name} completed={props.completed} toggleTaskCompleted={props.toggleTaskCompleted} deleteTask={props.deleteTask} setEditing={setEditing} />;

  return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
};

export default Todo;
