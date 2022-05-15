import {React} from 'react';
import TaskCompleteView from './TaskCompleteView/TaskCompleteView';
import ToDoView from './ToDoView/ToDoView';
import AddTaskPannelView from './AddTaskPannelView/AddTaskPannelView';
import Title from './Header/Title';
import PropTypes from 'prop-types';

function MainContent({isEmptyList, toDoListItems =[], setNewTask}){

    return (
    <main id='content' className='main_content' style={{marginLeft: 268+'px'}}>
        <div id='editor'>
            <section className='view_content'>
                <Title />
                <TaskCompleteView />
                <ToDoView isEmptyList={isEmptyList} toDoListItems = {toDoListItems}/>
                <AddTaskPannelView toDoListItems = {toDoListItems} setNewTask = {setNewTask}/>
            </section>
        </div> 
    </main>
    );
}

MainContent.propTypes = {
    isEmptyList: PropTypes.bool,
    toDoListItems: PropTypes.arrayOf(PropTypes.shape({
        taskName: PropTypes.string,
        taskDescription: PropTypes.string,
      })),
    setNewTask: PropTypes.func,
}
export default MainContent;