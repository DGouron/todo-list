import {React} from 'react';
import EmptyState from '../EmptyState';
import ToDoItem from './ToDoItem';
import PropTypes from 'prop-types';

function ToDoView({isEmptyList, toDoListItems = [1, 2]}){

    console.log(toDoListItems.lenght)
    return (
    <div className='task_list_item'>
        {isEmptyList ? <EmptyState />: 
        <ul className='items'>
            {toDoListItems.map(() => {<li><ToDoItem /></li>})}
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
