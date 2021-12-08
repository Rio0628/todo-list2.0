import React, { Component } from 'react';
import { CurrentTasksView, IndTodoTask, IndSavedTask, SavedTasksView } from './pages';
import api from './api';

function App() {

  // api.getAllTasks().then( tasks => console.log(tasks.data.data))

  return (
    <div className="container">
      <CurrentTasksView /> 
    </div>
  );
}

export default App;
