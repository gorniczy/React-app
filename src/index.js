import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Text } from './Text';
import { ButtonYes } from './ButtonYes';
import { ButtonNo } from './ButtonNo';
import { Title } from './Title';
import registerServiceWorker from './registerServiceWorker';

export class MyApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: true,
      hidden: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  componentWillMount() {
    document.body.style.background = '#F49797';
  }

  handleChange() {
    this.setState({ title: false });
    document.body.style.background = '#FFFFFF';
  }

  toggle(newBool) {
    this.setState({ hidden: newBool });
  }

  render() {
    if(this.state.title) {
      return <Title onClick={this.handleChange} />
    }
    else {

      return (<div className="container">
                <Text />
                <ButtonYes toggleMe={this.toggle} visibility={this.state.hidden} />
                <ButtonNo toggleMe={this.toggle} visibility={this.state.hidden} />
              </div>);
          }
    }
}

ReactDOM.render(<MyApp />, document.getElementById('root'));
registerServiceWorker();
