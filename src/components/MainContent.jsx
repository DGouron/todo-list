import {React} from 'react';
import TaskCompleteView from './TaskCompleteView/TaskCompleteView';
import ToDoView from './ToDoView/ToDoView';
import AddTaskPannelView from './AddTaskPannelView/AddTaskPannelView';
import Title from './Header/Title';
import PropTypes from 'prop-types';

function MainContent({isEmptyList, toDoListItems =[], setNewTask, isEditorOpen, setIsEditorOpen, prepareTaskToDelete}){

    return (
    <main id='content' className='main_content' style={{marginLeft: 268+'px'}}>
        <div id='editor'>
            <section className='view_content'>
                <Title />
                {!isEditorOpen && toDoListItems.length !== 0 ? 
                    <button type="button" data-add-task-navigation-element="true" className="plus_add_button" name = {"OpenEditor"} onClick = {() => handleOpenEditorButtonClick(setIsEditorOpen, true)}><span className="icon_add" aria-hidden="true"><svg width="13" height="13"><path d="M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z" fill="currentColor" fillRule="evenodd"></path></svg></span>Ajouter une tâche</button>
                :
                    <TaskCompleteView />
                }
                <ToDoView isEmptyList={isEmptyList} toDoListItems = {toDoListItems} prepareTaskToDelete={prepareTaskToDelete}/>
                <AddTaskPannelView toDoListItems = {toDoListItems} setNewTask = {setNewTask} isEditorOpen = {isEditorOpen} setIsEditorOpen = {setIsEditorOpen}/>
            </section>
        </div> 
    </main>
    );
}

function handleOpenEditorButtonClick(handleFunction, status){
    handleFunction(status);
}

MainContent.propTypes = {
    isEmptyList: PropTypes.bool,
    toDoListItems: PropTypes.arrayOf(PropTypes.shape({
        tasId: PropTypes.string,
        taskName: PropTypes.string,
        taskDescription: PropTypes.string,
      })),
    setNewTask: PropTypes.func,
    isEditorOpen: PropTypes.bool,
    setIsEditorOpen: PropTypes.func,
    prepareTaskToDelete: PropTypes.func,
}
export default MainContent;