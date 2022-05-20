import {React, useCallback, useEffect, useState} from 'react';
import Header from './components/Header/Header';
import MainContent from './components/MainContent';
import TaskGlobalView from './components/TaskGlobalView/TaskGlobalView';

function App() {
  const [isEmptyList, setEmptyState] = useState(true);
  const [toDoListItems, setToDoListItems] = useState([]);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [task, setNewTask] = useState({taskId: "", taskName: "", taskDescription: ""});
  
  const clearState = () => {
    setToDoListItems([]);
  };

//Force the refresh of the component when a new task is add
  const [, forceViewRefresh] = useState();
  const callForceViewRefresh = useCallback(() => forceViewRefresh({}), []);

  const [taskToDelete, prepareTaskToDelete] = useState("");

useEffect(() => {
  const indexOfTask = findTask(taskToDelete, toDoListItems);
  if(indexOfTask !== -1){
    setToDoListItems(deleteTask(indexOfTask, toDoListItems));
    if(toDoListItems.length === 0){
      setEmptyState(true);
    }
    callForceViewRefresh();
  }
}, [taskToDelete]);

  useEffect(() => {
    const newToDoListItems = toDoListItems;
    clearState();

    if(task.taskName.length > 2){
      newToDoListItems.push(task)
      setToDoListItems(newToDoListItems);

      if(toDoListItems.length !== 0){
        setEmptyState(false);
        setIsEditorOpen(true);
      } else {
        setEmptyState(true);
      }
    }
    callForceViewRefresh();
  }, [task]);

  return (
    <div className="App">
      <Header />
      <MainContent isEmptyList = {isEmptyList} toDoListItems = {toDoListItems} setNewTask = {setNewTask} isEditorOpen = {isEditorOpen} setIsEditorOpen = {setIsEditorOpen} prepareTaskToDelete = {prepareTaskToDelete}/>
      <TaskGlobalView />
    </div>
  );
}

function deleteTask(indexOfTask, toDoListItems){
  const newToDoListItems = toDoListItems;

  newToDoListItems.splice(indexOfTask, 1);

  return newToDoListItems;
}

function findTask(taskId, taskList){
  let indexToDelete = -1;

  taskList.map((item, index) => {
    if(item.taskId === taskId){
      indexToDelete = index;
    }
  });

  return indexToDelete;
}
export default App;
