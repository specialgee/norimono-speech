import React, { useState } from 'react';
import {Container, Row} from 'react-bootstrap'
import { useSpeechSynthesis } from 'react-speech-kit';

function SpeechSynthesis() {
    const [value, setValue] = useState('');
    const { speak } = useSpeechSynthesis();
  
    return (
      <div>
        <textarea
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button onClick={() => speak({ text: value })}>Speak</button>
      </div>
    );
  }

export default SpeechSynthesis;