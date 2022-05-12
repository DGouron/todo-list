
import {React} from 'react';
import TaskGlobalView from './components/TaskGlobalView/TaskGlobalView';
import TaskCompleteView from './components/TaskCompleteView/TaskCompleteView';
import ToDoView from './components/ToDoView/ToDoView';
import AddTaskPannelView from './components/AddTaskPannelView/AddTaskPannelView';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Its my to-do list.
      </header>
      <TaskGlobalView />
      <TaskCompleteView />
      <ToDoView />
      <AddTaskPannelView />
    </div>
  );
}

export default App;
