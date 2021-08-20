import React, { Component } from 'react';
// import Feedback from './components/Feedback';
// import Dropdown from './components/Dropdown';
// import ColorPicker from './components/ColorPicker';

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
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = () => {
    this.setState(prevState => ({
      good: prevState.state.good + 1,
    }));
  };

  render() {
    return (
      <div>
        <div>
          <h1>Please leave feedback</h1>
          <div>
            <button type="button" onClick={this.handleIncrement}>
              Good
            </button>
            <button type="button">Neutral</button>
            <button type="button">Bad</button>
          </div>
        </div>
        <div>
          <h2>Statistics</h2>
          <div>
            <p>Good: {this.state.good}</p>
            <p>Neutral: </p>
            <p>Bad: </p>
            <p>Total: </p>
            <p>Positive feedback: </p>
          </div>
        </div>
      </div>
    );
  }
}

// const App = () => (
//   <>
//     {/* <ColorPicker options={colorPickerOptions} /> */}
//     {/* <hr /> */}
//     <Dropdown />
//     <hr />
//     <Feedback />
//   </>
// );

export default App;
