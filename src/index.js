import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Dialogue } from './Dialogue';
import { ButtonYes } from './ButtonYes';
import { ButtonNo } from './ButtonNo';
import { Title } from './Title';
import registerServiceWorker from './registerServiceWorker';

export class MyApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = { title: true };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({ title: false });
    document.body.style.background = '#FFFFFF';
  }

  componentWillMount() {
      document.body.style.background = '#F49797';
  }


  render() {
    if(this.state.title) {
      return <Title onClick={this.handleChange} />
    }
    else {

      return (<div>
              <Dialogue />
              <ButtonYes />
              <br />
              <ButtonNo />
              </div>);
          }
    }
}

ReactDOM.render(<MyApp />, document.getElementById('root'));
registerServiceWorker();
