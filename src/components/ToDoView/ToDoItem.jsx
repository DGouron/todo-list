import {React} from 'react';

function ToDoItem(){
    return (
        <li className='task_list_item'>
            <button type="button" role="checkbox" className='task_checkbox'/> Ma tache à faire
        </li>);
}

export default ToDoItem;