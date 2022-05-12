
import {React} from 'react';
import Header from './components/Header/Header';
import MainContent from './components/MainContent';
import TaskGlobalView from './components/TaskGlobalView/TaskGlobalView';

function App() {
  return (
    <div className="App">
      <Header />
      <TaskGlobalView />
      <MainContent />
    </div>
  );
}

export default App;
