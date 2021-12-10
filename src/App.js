import React, { Component } from 'react';
import { CurrentTasksView, FinishedTasksView } from './pages';
import api from './api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  
  render () {
    // api.getAllTasks().then( tasks => console.log(tasks.data.data)

    const onChange = (e) => {
      console.log(e.target)

      if (e.target.className === 'taskNameInput') {
        this.setState({ taskNameInput: e.target.value });
        // Include the rest of the code that updates the certain task
      }

      if (e.target.className === 'addTaskInput') {
        this.setState({ addTaskInput: e.target.value });
      }

      if (e.target.className === 'dateInput') {
        this.setState({ dateInput: e.target.value });
      }
    }

    const onClick = (e) => {
      console.log(e.target.className)

      if (e.target.className === 'taskName') {
        this.setState({ taskNameEdit: true });
      }

      if (e.target.className === 'todoTasksCntr' || e.target.className === 'indFnshdTasksCntr') {
        this.setState({ taskNameEdit: false });
      }
    }

    const setFinishedViewState = () => this.setState({ finishedTasksViewOn: !this.state.finishedTasksViewOn });

    console.log(this.state.taskNameEdit)
      
    return (
      <div className="container" onClick={onClick}>
        <CurrentTasksView taskNameEdit={this.state.taskNameEdit} handleFinishedTsksView={setFinishedViewState} onChange={onChange} onClick={onClick}/> 
        <FinishedTasksView taskNameEdit={this.state.taskNameEdit} finishedTsksActive={this.state.finishedTasksViewOn} handleFinishedTsksView={setFinishedViewState} onClick={onClick} onChange={onChange}/> 
      </div>
    );
  }
}

export default App;
