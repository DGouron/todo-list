import {React} from 'react';
import EmptyState from '../EmptyState';
import ToDoItem from './ToDoItem';
import PropTypes from 'prop-types';

function ToDoView({isEmptyList, toDoListItems = []}){
    const AllItemsToDisplay = toDoListItems;
    return (
    <div className='task_list_item'>
        {isEmptyList ? <EmptyState />: 
        <ul className='items'>
            {AllItemsToDisplay.map((item) => { 
                return <ToDoItem key={item.taskName} title={item.taskName} description={item.taskDescription}/>
            })}
        </ul>}
    </div>)
    ;
}
ToDoView.propTypes = {
    isEmptyList: PropTypes.bool,
    toDoListItems: PropTypes.arrayOf(PropTypes.shape({
        taskName: PropTypes.string,
        taskDescription: PropTypes.string,
      })),
  }
export default ToDoView;
