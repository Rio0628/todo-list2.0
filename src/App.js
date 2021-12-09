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


    const onClick = (e) => {
      console.log(e.target.className)

    }

    const setFinishedViewState = () => this.setState({ finishedTasksViewOn: !this.state.finishedTasksViewOn });

    console.log(this.state.finishedTasksViewOn)
      
    return (
      <div className="container">
        <CurrentTasksView handleFinishedTsksView={setFinishedViewState} onClick={onClick}/> 
        <FinishedTasksView finishedTsksActive={this.state.finishedTasksViewOn} handleFinishedTsksView={setFinishedViewState} onClick={onClick}/> 
      </div>
    );
  }
}

export default App;
