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
    await api.getAllTasks().then( tasks => allTasks = tasks.data.data ).catch( allTasks = []);

    todoTasks = await allTasks.filter( task => task.type === 'to-do');
    finishedTasks = await allTasks.filter( task => task.type === 'finished');
    
    this.setState({ allTasks: allTasks });
    this.setState({ todoTasks: todoTasks });
    this.setState({ finishedTasks: finishedTasks });

    // console.log(allTasks)
    // console.log(todoTasks)
    // console.log(finishedTasks)
  }

  async setClockTime () {
    let date = new Date(), updatedDate;
    updatedDate = await date.toLocaleString(('en-US'), { timezone: 'America/New_York' }).split(',');
    date = date.toString().split(' ')
    const appDate = `${date[1]} ${date[2]} |${updatedDate[1]}`
    this.setState({ clockTime: appDate });
    // console.log(appDate);

    let clockTimeout = setTimeout( () => this.setClockTime(), 1000);

    if (this.state.clockStopped) { clearTimeout(clockTimeout) }
    // console.log(updatedDate);
  }

  componentDidMount () {
    this.setClockTime();
    this.handleShowingTasks();
  }

  componentWillUnmount () {
    this.setState({ clockStopped: true });
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
        let task = this.state.todoTasks.filter( task => task._id === e.target.getAttribute('task') );
        task[0].date = e.target.value;

        await api.updateTaskById(task[0]._id, task[0]).then( task => console.log('Task Updated'));
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
        await api.deleteTaskById(e.target.getAttribute('task')).then( task => alert('task') ).catch( err => console.log('Error') );
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

    // console.log(this.state.taskNameInput)

    const setFinishedViewState = () => this.setState({ finishedTasksViewOn: !this.state.finishedTasksViewOn });

    const addNewTask = async () => {
      let object = { name: this.state.addTaskInput, date: ' ', type: 'to-do'}
      await api.insertTask(object).then( task => alert('Task Added') ).catch( err => alert('Name needed for adding task.') );
      this.handleShowingTasks();
      document.querySelector('.addTaskInput').value = ''
    };

    // console.log(this.state.currentId)
      
    return (
      <div className="container" onClick={onClick}>
        <CurrentTasksView clockTime={this.state.clockTime} currentTaskOpen={this.state.currentTaskOpen} todoTasks={this.state.todoTasks} taskNameEdit={this.state.taskNameEdit} handleFinishedTsksView={setFinishedViewState} onChange={onChange} addNewTask={addNewTask} onClick={onClick}/> 
        <FinishedTasksView currentTaskOpen={this.state.currentTaskOpen} finishedTasks={this.state.finishedTasks} taskNameEdit={this.state.taskNameEdit} finishedTsksActive={this.state.finishedTasksViewOn} handleFinishedTsksView={setFinishedViewState} onClick={onClick} onChange={onChange}/> 
      </div>
    );
  }
}

export default App;
