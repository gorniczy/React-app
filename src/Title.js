import React from 'react';
import './Title.css';

export class Title extends React.Component {

  render() {
    return (
      <div className="title">
        <h1 className="app-name">Snoopy Dating App</h1>
        <button className="enter-btn" onClick={this.props.onClick}>woof
        </button>
      </div>
    );

  }
}
