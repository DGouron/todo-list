import {React, useState} from 'react';
import AddTaskButton from './AddTaskButton';
import PropTypes from 'prop-types';

function AddTaskPannelView( {toDoListItems, setNewTask, isEditorOpen, setIsEditorOpen}){
   const minLength = 4;
    const [taskNameValue, setTaskNameValue] = useState('');
    const [taskDescription, setTaskDescriptionValue] = useState('');

    return (
        <div>
            {
            isEditorOpen ? 
            <div>
                <form className='focus-marker-enabled-within'>
                    <div className='task_editor__editing_area'>
                        <div className='task_editor__input_fields'>   
                            <input name = {"taskNameField"} onChange={(e) => setTaskNameValue(e.target.value)} type={"text"} placeholder={"ex. : Déjeuner en famille dimanche à 12h #Personnel"} className='task_editor__content_field' />
                            <textarea placeholder='Description' onChange={(e) => setTaskDescriptionValue(e.target.value)}></textarea>
                        </div> 
                    </div>   
                </form>
                <div className='addTaskButtonsRow'>
                <AddTaskButton taskName={taskNameValue} taskDescription={taskDescription} toDoListItems = {toDoListItems} setNewTask = {setNewTask} deactiveThisButton={taskNameValue.length < minLength || taskDescription.length < minLength}/>
                <button className={"_7a2031d6 _81c213d2 _949f7858 f9408a0e _56a651f6"}  onClick = {() => handleOpenEditorButtonClick(setIsEditorOpen, false)}> <span className={"_09c23660"}>Annuler</span></button>
            </div>
        </div>
    : 
    <input type={"button"} defaultValue={"Ajouter une tâche"} name = {"OpenEditor"} className={"empty-state-button"}onClick = {() => handleOpenEditorButtonClick(setIsEditorOpen, true)}/>
    }   
        </div>)
}

function handleOpenEditorButtonClick(handleFunction, status){
    handleFunction(status);
}

AddTaskPannelView.propTypes = {
    toDoListItems: PropTypes.array,
    setNewTask: PropTypes.func,
    isEditorOpen: PropTypes.bool,
    setIsEditorOpen: PropTypes.func,
}
export default AddTaskPannelView;