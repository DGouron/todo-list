import {React} from 'react';
import PropTypes from 'prop-types';

function ToDoItem({taskId, title, description, prepareTaskToDelete}){
    const currentTaskId = taskId;
    return (
        <li className='task_list_item'>
            <div className='task_list_item_body'>
                <button type="button" role="checkbox" className='task_checkbox' onClick={() => handleCheckboxClicked(prepareTaskToDelete, currentTaskId)}>
                <div className="task_checkbox__circle">
                    <svg width="24" height="24">
                        <path fill="currentColor" d="M11.23 13.7l-2.15-2a.55.55 0 0 0-.74-.01l.03-.03a.46.46 0 0 0 0 .68L11.24 15l5.4-5.01a.45.45 0 0 0 0-.68l.02.03a.55.55 0 0 0-.73 0l-4.7 4.35z"></path>
                        </svg>
                </div>
                </button> {title}
                <p className='task_description'>{description}</p>
            </div>
        </li>);
}

function handleCheckboxClicked(prepareTaskToDelete, currentTaskId){
    prepareTaskToDelete(currentTaskId);
}
ToDoItem.propTypes = {
    taskId: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    prepareTaskToDelete: PropTypes.func,
}
export default ToDoItem;