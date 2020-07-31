import React from 'react';
import { render } from 'react-dom';
import './index.css';
import SpeechSynthesisExample from './useSpeechSynthesis';
import { GlobalStyles, Row } from './shared';

const App = () => (
  <div>
    <GlobalStyles />
    <Row>
      <SpeechSynthesisExample />
    </Row>
  </div>
);

render(<App />, document.getElementById('root'));
