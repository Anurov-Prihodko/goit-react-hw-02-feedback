import React, { Component } from 'react';
// import Feedback from './components/Feedback';
// import Dropdown from './components/Dropdown';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = e => {
    const buttonName = e.currentTarget.name;

    this.setState(prevState => ({
      [buttonName]: prevState[buttonName] + 1,
    }));
  };

  getPositiveFeedback = () => {
    const { good, neutral, bad } = this.state;

    const total = (good * 100) / (neutral + bad + good);
    return Math.round(total);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const calckOfPositiveFeedback = this.getPositiveFeedback();

    return (
      <div>
        <div>
          <h1>Please leave feedback</h1>
          <div>
            {options.map((option, index) => (
              <button
                key={index}
                name={option}
                onClick={this.countTotalFeedback}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
        <div>
          <h2>Statistics</h2>
          {good + neutral + bad === 0 ? (
            <p>No feedback given</p>
          ) : (
            <div>
              <p>Good: {good}</p>
              <p>Neutral: {neutral}</p>
              <p>Bad: {bad}</p>
              <p>Total: {good + neutral + bad}</p>
              <p>Positive feedback: {calckOfPositiveFeedback}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
