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
    // Method to call all tasks from the database and filter them according to their type value 
    let allTasks, todoTasks, finishedTasks;

    await api.getAllTasks().then( tasks => allTasks = tasks.data.data ).catch( allTasks = []);

    todoTasks = await allTasks.filter( task => task.type === 'to-do');
    finishedTasks = await allTasks.filter( task => task.type === 'finished');
    
    this.setState({ allTasks: allTasks });
    this.setState({ todoTasks: todoTasks });
    this.setState({ finishedTasks: finishedTasks });

  }

  async setClockTime () {
    // Method to get the current date and time and display it in the application
    let date = new Date(), updatedDate;
    updatedDate = await date.toLocaleString(('en-US'), { timezone: 'America/New_York' }).split(',');
    date = date.toString().split(' ')
    const appDate = `${date[1]} ${date[2]} |${updatedDate[1]}`
    this.setState({ clockTime: appDate });

    let clockTimeout = setTimeout( () => this.setClockTime(), 1000);

    if (this.state.clockStopped) { clearTimeout(clockTimeout) }
  }

  componentDidMount () {
    this.setClockTime();
    this.handleShowingTasks();
  }

  componentWillUnmount () {
    // Clears the main clock timeout 
    clearTimeout(this.setClockTime());
  }
  
  render () {

    const onChange = async (e) => {
      // Main onChange function 

      if (e.target.className === 'taskNameInput') {
        // Function to update the name value of a specific task
        await this.setState({ taskNameInput: e.target.value });
        let task = this.state.allTasks.filter( task => task._id === e.target.getAttribute('task') );
        task[0].name = e.target.value;

        await api.updateTaskById(task[0]._id, task[0]).then( task => console.log('Task Updated')).catch( err => alert(err) );
      }

      if (e.target.className === 'addTaskInput') {
        this.setState({ addTaskInput: e.target.value });
      }

      if (e.target.className === 'dateInput') {
        // Function to update the date value of a specified task 
        let task = this.state.todoTasks.filter( task => task._id === e.target.getAttribute('task') );
        task[0].date = e.target.value;

        await api.updateTaskById(task[0]._id, task[0]).then( task => console.log('Task Updated'));
      }
    }

    const onClick = async (e) => {
      // Main onClick Function

      if (e.target.className === 'taskName') {
        // Changes the p element of a specific task to the textarrea element to allow the user to change it 
        this.setState({ currentTaskOpen: e.target.getAttribute('task') });
        this.setState({ taskNameEdit: true });
      }

      if (e.target.className === 'todoTasksCntr' || e.target.className === 'indFnshdTasksCntr') {
        // Triggers the change of the textarea element of a certain task to turn back into the usual p element 
        this.setState({ taskNameEdit: false });
      }

      if (e.target.className === 'removeTaskBtn') {
        // Removes a certain task from the database 
        await this.setState({ currentId: e.target.getAttribute('task') });

        await api.deleteTaskById(e.target.getAttribute('task')).then( task => console.log('Task Removed') ).catch( err => this.setState({ allTasks: [] }) );
        this.handleShowingTasks();
        window.location.reload();
      }
      
      if (e.target.className === 'finishTaskBtn') {
        // Updates a certain task from the current tasks view to the finished tasks view 
        const task = this.state.todoTasks.filter( task => task._id === e.target.getAttribute('task'))
        task[0].type = 'finished';

        await api.updateTaskById(task[0]._id, task[0]).then( task => console.log('task updated') );
        this.handleShowingTasks();
      }

      if (e.target.className === 'returnTaskBtn') {
        // Updates a certain task from the finished tasks view to the current tasks view 
        const task = this.state.finishedTasks.filter( task => task._id === e.target.getAttribute('task'));
        task[0].type = 'to-do';

        await api.updateTaskById(task[0]._id, task[0]).then( task => console.log('task updated') );
        this.handleShowingTasks();
      }
    }

    // Takes care of bringing the finished tasks view 
    const setFinishedViewState = () => this.setState({ finishedTasksViewOn: !this.state.finishedTasksViewOn });

    const addNewTask = async () => {
      // Takes care of adding a new task element to the database
      let object = { name: this.state.addTaskInput, date: ' ', type: 'to-do'}
      await api.insertTask(object).then( task => console.log('Task Added') ).catch( err => alert('Name needed for adding task.') );
      this.handleShowingTasks();
      document.querySelector('.addTaskInput').value = ''
    };
      
    return (
      <div className="container" onClick={onClick}>
        <CurrentTasksView clockTime={this.state.clockTime} currentTaskOpen={this.state.currentTaskOpen} todoTasks={this.state.todoTasks} taskNameEdit={this.state.taskNameEdit} handleFinishedTsksView={setFinishedViewState} onChange={onChange} addNewTask={addNewTask} onClick={onClick}/> 
        
        <FinishedTasksView currentTaskOpen={this.state.currentTaskOpen} finishedTasks={this.state.finishedTasks} taskNameEdit={this.state.taskNameEdit} finishedTsksActive={this.state.finishedTasksViewOn} handleFinishedTsksView={setFinishedViewState} onClick={onClick} onChange={onChange}/> 
      </div>
    );
  }
}

export default App;
