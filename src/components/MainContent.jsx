import {React} from 'react';
import TaskCompleteView from './TaskCompleteView/TaskCompleteView';
import ToDoView from './ToDoView/ToDoView';
import AddTaskPannelView from './AddTaskPannelView/AddTaskPannelView';

function MainContent(){
    return (
    <main id='content' className='main_content' style={{marginLeft: 305+'px'}}>
        <div id='editor'>
            <section className='view_content'>
                <TaskCompleteView />
                <ToDoView />
                <AddTaskPannelView />
            </section>
        </div> 
    </main>
    );
}

export default MainContent;