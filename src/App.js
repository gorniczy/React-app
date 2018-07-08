import React from 'react';
import './App.css';

export default class Dialogue extends React.Component {
  render() {
    return (
      <div className="dialogue">
        <h2>- Wanna dance?
        </h2>
        <h2>
          {this.props.answer}
        </h2>
      </div>
    );
  }
}

export class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
    this.changeState = this.changeState.bind(this);
  }

  changeState() {
    this.setState({ clicked: true });
  }

  render() {
    if (this.state.clicked) {
      return <h2 className="dialogue">- Wiggle wiggle wiggle!</h2>;
    }

    return <button className="btn" onClick={this.changeState}>Are you ready?</button>;
  }
}
