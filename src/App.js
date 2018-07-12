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

  componentWillMount() {
    alert('Behold the new React Dating App');
  }

  render() {
    if (this.state.clicked) {
      return (
        <div>
          <h2 className="dialogue">- Wiggle wiggle wiggle!</h2>
          <img className="snoopy" src="https://techcrunch.com/wp-content/uploads/2016/01/180424-snoop-dogg-champagne-cheers-gi-bixe.gif?w=730&crop=1" alt="Snoop Dog dancing" />
        </div>
      );
    }

    return <button className="btn" onClick={this.changeState}>I dare you!</button>;
  }

}
