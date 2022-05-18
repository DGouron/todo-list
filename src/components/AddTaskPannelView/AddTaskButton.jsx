import {React} from 'react';
import PropTypes from 'prop-types';

function AddTaskButton({taskName, taskDescription, setNewTask, deactiveThisButton}){
    return ( 
    <div className=''>
        {deactiveThisButton
            ?
            <input type={"button"} className={"empty-state-button"} defaultValue={"Ajouter une tâche"} onClick={() => handlerClick(taskName, taskDescription, setNewTask)} disabled={true}/>
 
            :
            <input type={"button"} className={"empty-state-button"} defaultValue={"Ajouter une tâche"} onClick={() => handlerClick(taskName, taskDescription, setNewTask)}/>
 
        }
    </div>
    );
}

function handlerClick(taskName, taskDescription, setNewTask){
    let newTask = {
        taskId: taskName + Math.random(),
        taskName: taskName,
        taskDescription: taskDescription
    };
    setNewTask(newTask);
}

AddTaskButton.propTypes = {
    deactiveThisButton: PropTypes.bool,
    taskName: PropTypes.string,
    taskDescription: PropTypes.string,
    setNewTask: PropTypes.func,
}
export default AddTaskButton;