import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dialogue from './App';
import { Button } from './App';
import { Title } from './Titlescreen';
import registerServiceWorker from './registerServiceWorker';

/* const MyApp = () => {
  return  (<div>
  <Dialogue answer="- Yeah!" />
  <Button />
  </div>);
}*/

class MyApp extends React.Component {

  render() {
    return <Title />
  }
}

ReactDOM.render(<MyApp />, document.getElementById('root'));
registerServiceWorker();
