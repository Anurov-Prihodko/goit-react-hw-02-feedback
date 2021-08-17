import React, { Component } from 'react';
// import Feedback from './components/Feedback';
// import Dropdown from './components/Dropdown';
// import ColorPicker from './components/ColorPicker';
import TodoList from './components/TodoList';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

class App extends Component {
  state = {
    todos: [],
  };

  render() {
    return (
      <>
        {/* <ColorPicker options={colorPickerOptions} />
        <hr />
        <Dropdown />
        <hr />
        <Feedback /> */}
        <TodoList />
      </>
    );
  }
}

// const App = () => (
//   <>
//     <ColorPicker options={colorPickerOptions} />
//     <hr />
//     <Dropdown />
//     <hr />
//     <Feedback />
//   </>
// );

export default App;
