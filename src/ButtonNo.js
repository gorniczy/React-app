import React from 'react';
import './Button.css';

export class ButtonNo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
    this.changeState = this.changeState.bind(this);
  }

  changeState() {
    this.setState({ clicked: true });
    this.props.toggleMe(true);
  }

  render() {
    if (this.state.clicked) {
      return (
        <div>
          <h2 className="dialogue">S(he) hates my hat.</h2>
          <img className="snoopy" src="https://media.giphy.com/media/4ZaVKo7F0OI3tZQA5O/giphy.gif" width="640px" alt="Snoop Dog in a hat" />
        </div>
      );
    }

    else if(this.props.visibility) {
      return (null);
    }

    return <button className="btn" onClick={this.changeState}>No way!</button>;

    }
}
