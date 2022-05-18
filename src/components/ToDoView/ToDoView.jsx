import {React} from 'react';
import EmptyState from '../EmptyState';
import ToDoItem from './ToDoItem';
import PropTypes from 'prop-types';

function ToDoView({isEmptyList, toDoListItems = [], prepareTaskToDelete}){
    const AllItemsToDisplay = toDoListItems;
    return (
    <div className='task_list_item'>
        {AllItemsToDisplay.length === 0 ? <div></div> : isEmptyList ? <EmptyState />: 
        <ul className='items'>
            {AllItemsToDisplay.map((item) => { 
                return <ToDoItem key={item.taskName + Math.random()} title={item.taskName} description={item.taskDescription} taskId={item.taskId} prepareTaskToDelete={prepareTaskToDelete}/>
            })}
        </ul>}
    </div>)
    ;
}
ToDoView.propTypes = {
    isEmptyList: PropTypes.bool,
    toDoListItems: PropTypes.arrayOf(PropTypes.shape({
        taskId: PropTypes.string,
        taskName: PropTypes.string,
        taskDescription: PropTypes.string,
      })),
      prepareTaskToDelete: PropTypes.func,
  }
export default ToDoView;
