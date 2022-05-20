import {React} from 'react';
import PropTypes from 'prop-types';

function AddTaskButton({taskName, taskDescription, setNewTask, deactiveThisButton, setCallClearForm}){
    return ( 
    <div className=''>
        {deactiveThisButton
            ?
            <input type={"button"} className={"empty-state-button"} defaultValue={"Ajouter une tâche"} disabled={deactiveThisButton} onClick={() => handlerClick(taskName, taskDescription, setNewTask)}/>
 
            :
            <input type={"button"} className={"empty-state-button"} defaultValue={"Ajouter une tâche"} onClick={() =>{
                 handlerClick(taskName, taskDescription, setNewTask, setCallClearForm)}}/>
 
        }
    </div>
    );
}

function handlerClick(taskName, taskDescription, setNewTask, setCallClearForm){
    setCallClearForm(true);
    let newTask = {
        taskId: taskName + Math.random(),
        taskName: taskName,
        taskDescription: taskDescription
    };
    setNewTask(newTask);
    console.log('CALL CLEAR')
}

AddTaskButton.propTypes = {
    setCallClearForm: PropTypes.func,
    deactiveThisButton: PropTypes.bool,
    taskName: PropTypes.string,
    taskDescription: PropTypes.string,
    setNewTask: PropTypes.func,
}
export default AddTaskButton;