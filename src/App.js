import React, { Component } from 'react';
import { CurrentTasksView, FinishedTasksView } from './pages';
import api from './api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  async handleShowingTasks () {
    let allTasks, todoTasks, finishedTasks;
    await api.getAllTasks().then( tasks => allTasks = tasks.data.data );

    todoTasks = await allTasks.filter( task => task.type === 'to-do');
    finishedTasks = await allTasks.filter( task => task.type === 'finished');
    
    this.setState({ todoTasks: todoTasks });
    this.setState({ finishedTasks: finishedTasks });

    console.log(allTasks)
    console.log(todoTasks)
    console.log(finishedTasks)
  }

  componentDidMount () {
      this.handleShowingTasks();
  }
  
  render () {
    // api.getAllTasks().then( tasks => console.log(tasks.data.data)
  
    // console.log(this.state.todoTasks)
    // console.log(this.state.finishedTasks)

    const onChange = (e) => {
      console.log(e.target.getAttribute('task'))

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

    // console.log(this.state.taskNameEdit)
      
    return (
      <div className="container" onClick={onClick}>
        <CurrentTasksView todoTasks={this.state.todoTasks} taskNameEdit={this.state.taskNameEdit} handleFinishedTsksView={setFinishedViewState} onChange={onChange} onClick={onClick}/> 
        <FinishedTasksView finishedTasks={this.state.finishedTasks} taskNameEdit={this.state.taskNameEdit} finishedTsksActive={this.state.finishedTasksViewOn} handleFinishedTsksView={setFinishedViewState} onClick={onClick} onChange={onChange}/> 
      </div>
    );
  }
}

export default App;
