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
  party() {
    alert('shake it!');
  }
  render() {
    return <button className="btn" onClick={this.party}>Are you ready?</button>
  }
}
