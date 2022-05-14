import {React, useState} from 'react';
import AddTaskButton from './AddTaskButton';
import PropTypes from 'prop-types';

function AddTaskPannelView( {toDoListItems, setNewTask}){
    const [taskNameValue, setTaskNameValue] = useState('');
    const [taskDescription, setTaskDescriptionValue] = useState('');

    return (
    <form className='focus-marker-enabled-within'>
            <div className='task_editor__editing_area'>
                <div className='task_editor__input_fields'>   
                <input name = {"taskNameField"} onChange={(e) => setTaskNameValue(e.target.value)} type={"text"} placeholder={"ex. : Déjeuner en famille dimanche à 12h #Personnel"} className='task_editor__content_field' />
                <textarea placeholder='Description' onChange={(e) => setTaskDescriptionValue(e.target.value)}></textarea>
            </div> 
            <div className='addTaskButtonsRow'>
                <AddTaskButton taskName={taskNameValue} taskDescription={taskDescription} toDoListItems = {toDoListItems} setNewTask = {setNewTask}/>
                <input type={"button"} defaultValue={"Annuler"} />
            </div>
        </div>   
    </form>);
}

AddTaskPannelView.propTypes = {
    toDoListItems: PropTypes.array,
    setNewTask: PropTypes.func,
}
export default AddTaskPannelView;