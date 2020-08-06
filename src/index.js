import React from 'react';
import { render } from 'react-dom';
import './index.css';
import SpeechSynthesis from './SpeechSynthesis';
import { GlobalStyles, Row } from './shared';

const App = () => (
  <div className="app">
    <GlobalStyles />
    <Row>
      <SpeechSynthesis />
    </Row>
  </div>
);

render(<App />, document.getElementById('root'));
