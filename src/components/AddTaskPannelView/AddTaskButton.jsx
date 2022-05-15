import {React} from 'react';
import PropTypes from 'prop-types';

function AddTaskButton({taskName, taskDescription, setNewTask}){
    return ( 
    <div className=''>
        <input type={"button"} defaultValue={"Ajouter une tâche"} onClick={() => handlerClick(taskName, taskDescription, setNewTask)}/>
    </div>
    );
}

function handlerClick(taskName, taskDescription, setNewTask){
    let newTask = {
        taskName: taskName,
        taskDescription: taskDescription
    };
    console.log(newTask);
    setNewTask(newTask);
}

AddTaskButton.propTypes = {
    taskName: PropTypes.string,
    taskDescription: PropTypes.string,
    setNewTask: PropTypes.func,
}
export default AddTaskButton;