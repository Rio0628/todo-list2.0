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
    
    this.setState({ allTasks: allTasks });
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

    const onChange = async (e) => {
      console.log(e.target.getAttribute('task'))

      if (e.target.className === 'taskNameInput') {
        await this.setState({ taskNameInput: e.target.value });
        let task = this.state.allTasks.filter( task => task._id === e.target.getAttribute('task') );
        task[0].name = e.target.value;

        await api.updateTaskById(task[0]._id, task[0]).then( task => console.log('Task Updated')).catch( err => alert(err) );

        // Include the rest of the code that updates the certain task
      }

      if (e.target.className === 'addTaskInput') {
        this.setState({ addTaskInput: e.target.value });
      }

      if (e.target.className === 'dateInput') {
        this.setState({ dateInput: e.target.value });
      }
    }

    const onClick = async (e) => {
      console.log(e.target.className)

      if (e.target.className === 'container') {
        this.setState({ currentTaskOpen: '' });
      }

      if (e.target.className === 'taskName') {
        this.setState({ currentTaskOpen: e.target.getAttribute('task') });
        this.setState({ taskNameEdit: true });
      }

      if (e.target.className === 'todoTasksCntr' || e.target.className === 'indFnshdTasksCntr') {
        this.setState({ taskNameEdit: false });
      }

      if (e.target.className === 'removeTaskBtn') {
        await this.setState({ currentId: e.target.getAttribute('task') });
        await api.deleteTaskById(e.target.getAttribute('task')).then( task => alert('task') ).catch( err => alert('error removing task. ') );
        this.handleShowingTasks();
      }
      
      if (e.target.className === 'finishTaskBtn') {
        const task = this.state.todoTasks.filter( task => task._id === e.target.getAttribute('task'))
        task[0].type = 'finished';

        await api.updateTaskById(task[0]._id, task[0]).then( task => console.log('task updated') );
        this.handleShowingTasks();
        // console.log(task)
      }

      if (e.target.className === 'returnTaskBtn') {
        const task = this.state.finishedTasks.filter( task => task._id === e.target.getAttribute('task'));
        task[0].type = 'to-do';

        await api.updateTaskById(task[0]._id, task[0]).then( task => console.log('task updated') );
        this.handleShowingTasks();
      }
    }

    console.log(this.state.taskNameInput)

    const setFinishedViewState = () => this.setState({ finishedTasksViewOn: !this.state.finishedTasksViewOn });

    const addNewTask = async () => {
      let object = { name: this.state.addTaskInput, date: '0000-00-00', type: 'to-do'}
      await api.insertTask(object).then( task => alert('Task Added') ).catch( err => alert('Name needed for adding task.') );
      this.handleShowingTasks();
    };

    console.log(this.state.currentId)
      
    return (
      <div className="container" onClick={onClick}>
        <CurrentTasksView currentTaskOpen={this.state.currentTaskOpen} todoTasks={this.state.todoTasks} taskNameEdit={this.state.taskNameEdit} handleFinishedTsksView={setFinishedViewState} onChange={onChange} addNewTask={addNewTask} onClick={onClick}/> 
        <FinishedTasksView currentTaskOpen={this.state.currentTaskOpen} finishedTasks={this.state.finishedTasks} taskNameEdit={this.state.taskNameEdit} finishedTsksActive={this.state.finishedTasksViewOn} handleFinishedTsksView={setFinishedViewState} onClick={onClick} onChange={onChange}/> 
      </div>
    );
  }
}

export default App;
