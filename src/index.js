import React, { Component } from 'react';
import { render } from 'react-dom';
import './index.css';
import TextArea from './TextArea';
import SpeechSynthesis from './SpeechSynthesis';
import { GlobalStyles, Row } from './shared';

class App extends Component {
  constructor(props) {
    super(props);

    this.textRef = React.createRef();
  }

  componentDidMount = async () => {

  }

  componentWillUnmount() {

  }
  
  render() {

    return (
      <div className="app">
        <GlobalStyles />
          <Row>
            <TextArea ref={this.textRef} />
            <SpeechSynthesis textArea={this.textRef} />
          </Row>
      </div>
    )}
}

render(<App />, document.getElementById('root'));
