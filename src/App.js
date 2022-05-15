import {React, useEffect, useState} from 'react';
import Header from './components/Header/Header';
import MainContent from './components/MainContent';
import TaskGlobalView from './components/TaskGlobalView/TaskGlobalView';

function App() {
  const [isEmptyList, setEmptyState] = useState(true);
  const [toDoListItems, setToDoListItems] = useState([]);
  const [task, setNewTask] = useState({taskName: "", taskDescription: ""});
  
  const clearState = () => {
    setToDoListItems([]);
  };

  useEffect(() => {
    const newToDoListItems = toDoListItems;
    clearState();

    if(task.taskName.length > 2){
      newToDoListItems.push(task)
      console.table(newToDoListItems);
      setToDoListItems(newToDoListItems);

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
