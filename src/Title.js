import React from 'react';
import './Title.css';

export class Title extends React.Component {

  render() {
    return (
      <div className="title">
        <h1 className="app-name">React Dating App</h1>
        <button className="enter-btn" onClick={this.props.onClick}>Press to m(edit)ate
        </button>
      </div>
    );

  }
}
