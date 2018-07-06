import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dialogue from './App';
import {Button} from './App';
import registerServiceWorker from './registerServiceWorker';

class MyApp extends React.Component {

  render() {
    return (<div>
    <Dialogue name="- Yeah!" />
    <Button />
    </div>);
  }
}

ReactDOM.render(<MyApp />, document.getElementById('root'));
registerServiceWorker();
