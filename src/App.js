import React, { Component} from 'react';
import Turtles from './turtles';

class App extends Component {
  state = {
    turtles: [
      {name: 'Leonardo', mask: 'blue', id: 1},
      {name: 'Donatello', mask: 'purple', id: 2},
      {name: 'Raphael', mask: 'red', id: 3},
      {name: 'Michelangelo', mask: 'orange', id: 4}
    ]
  }
  render(){
    return (
      <div className="App">
        <h1>My First React App!</h1>
        <p>Welcome :D</p>
        <Turtles turtles={this.state.turtles} />
      </div>
    );
  }
}

export default App;
