import React from 'react';
import './Button.css';

export class ButtonNo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
    this.changeState = this.changeState.bind(this);
  }

  changeState() {
    this.setState({ clicked: true, display: false });
  }

  render() {
    if (this.state.clicked) {
      return (
        <div>
          <h2 className="dialogue">- We cool.. for now.</h2>
          <img className="snoopy" src="https://media.giphy.com/media/Bcp7itvVXnTNK/giphy.gif" alt="Snoop Dog disapproves" />
        </div>
      );
    }

      return <button className="btn" style={{backgroundColor: 'green'}} onClick={this.changeState}>No way!</button>;

    }
}
