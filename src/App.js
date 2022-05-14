import {React, useEffect, useState} from 'react';
import Header from './components/Header/Header';
import MainContent from './components/MainContent';
import TaskGlobalView from './components/TaskGlobalView/TaskGlobalView';

function App() {
  const [isEmptyList, setEmptyState] = useState(true);
  const [toDoListItems, setToDoListItems] = useState([]);
  const [task, setNewTask] = useState({taskName: "", taskDescription: ""});
  
  useEffect(() => {
    const newToDoListItems = toDoListItems;
    if(task.taskName.length > 2){
      console.log('ADD IT')
      newToDoListItems.push(task);
      setToDoListItems(newToDoListItems);
      console.log(toDoListItems.length);
      if(toDoListItems.length !== 0){
        setEmptyState(false);
      } else {
        setEmptyState(true);
      }
    }
  }, [task]);

  return (
    <div className="App">
      <Header />
      <MainContent isEmptyList = {isEmptyList} toDoListItems = {toDoListItems} setNewTask = {setNewTask}/>
      <TaskGlobalView />
    </div>
  );
}

export default App;
