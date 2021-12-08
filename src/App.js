import React, { Component } from 'react';
import api from './api';

function App() {

  api.getAllTasks().then( tasks => console.log(tasks.data.data))

  return (
    <div className="container">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
