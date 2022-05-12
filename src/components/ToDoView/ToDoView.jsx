import {React, useState} from 'react';
import EmptyState from '../EmptyState';
import ToDoItem from './ToDoItem';
function ToDoView(){

    const [isEmptyList] = useState(false);
    return (
    <div className='task_list_item'>
        {isEmptyList ? <EmptyState />: 
        <ul className='items'>
            <ToDoItem />
            <ToDoItem />
            <ToDoItem />
        </ul>}
    </div>)
    ;
}

export default ToDoView;
