import React from 'react';
import './Button.css';

export class ButtonYes extends React.Component {
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
      return (
        <div>
          <h2 className="dialogue">- Wiggle wiggle wiggle!</h2>
          <img className="snoopy" src="https://techcrunch.com/wp-content/uploads/2016/01/180424-snoop-dogg-champagne-cheers-gi-bixe.gif?w=730&crop=1" alt="Snoop Dog dancing" />
        </div>
      );
    }

    return <button className="btn" onClick={this.changeState}>Go for it!</button>;
  }

}
