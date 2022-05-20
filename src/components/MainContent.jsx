import {React} from 'react';
import TaskCompleteView from './TaskCompleteView/TaskCompleteView';
import ToDoView from './ToDoView/ToDoView';
import AddTaskPannelView from './AddTaskPannelView/AddTaskPannelView';
import Title from './Header/Title';
import PropTypes from 'prop-types';
import OpenEditorButton from './AddTaskPannelView/OpenEditorButton';

function MainContent({isEmptyList, toDoListItems =[], setNewTask, isEditorOpen, setIsEditorOpen, prepareTaskToDelete}){

    return (
    <main id='content' className='main_content' style={{marginLeft: 268+'px'}}>
        <div id='editor'>
            <section className='view_content'>
                <Title />
                <OpenEditorButton setIsEditorOpen={setIsEditorOpen} isEditorOpen = {isEditorOpen}/>
                {!isEditorOpen && toDoListItems.length !== 0 ? 
                   <div></div>             :
                    <TaskCompleteView />
                }
                <ToDoView isEmptyList={isEmptyList} toDoListItems = {toDoListItems} prepareTaskToDelete={prepareTaskToDelete} isEditorOpen={isEditorOpen}/>
                <AddTaskPannelView toDoListItems = {toDoListItems} setNewTask = {setNewTask} isEditorOpen = {isEditorOpen} setIsEditorOpen = {setIsEditorOpen}/>
            </section>
        </div> 
    </main>
    );
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