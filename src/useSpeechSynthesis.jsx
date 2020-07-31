import React, { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import { Container } from './shared';

const SpeechSynthesis = () => {
  const [text, setText] = useState('');
  const [rate, setRate] = useState(0.8);
  const [pitch, setPitch] = useState(0.9);
  const [voiceIndex, setVoiceIndex] = useState(null);
  const onEnd = () => {
    // do something here after speaking has finished
  };
  const { speak, cancel, speaking, supported, voices } = useSpeechSynthesis({
    onEnd,
  });

  //const voice = voices[12] || null;
  //const voice = voices[57] || null;
  let voice;
  //console.log(voices)

  voices.forEach(voiceIndex => {
    if (voiceIndex.name === "Google 日本語") {
      //console.log(voiceIndex)
      voice = voiceIndex;
    }
  });

  const styleFlexRow = { display: 'flex', flexDirection: 'row' };
  const styleContainerRatePitch = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 12,
  };

  return (
    <Container>
      <div className="speech-wrapper">
        <form>
          {/* <h2>norimono</h2> */}
          {!supported && (
            <p>
              Oh no, it looks like your browser doesn&#39;t support Speech
              Synthesis.
            </p>
          )}
          {supported && (
            <React.Fragment>
              {/* <p>
                {`Type a message below then click 'Speak'
                  and SpeechSynthesis will read it out.`}
              </p>
              <label htmlFor="voice">Voice</label>
              <select
                id="voice"
                name="voice"
                value={voiceIndex || ''}
                onChange={(event) => {
                  setVoiceIndex(event.target.value);
                }}
              >
                <option value="">Default</option>
                {voices.map((option, index) => (
                  <option key={option.voiceURI} value={index}>
                    {`${option.lang} - ${option.name}`}
                  </option>
                ))}
              </select> */}
              <div className="text-area">
                <label className="message-label" htmlFor="message">テキスト</label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={text}
                  onChange={(event) => {
                    setText(event.target.value);
                  }}
                />
                {speaking ? (
                  <button className="button-stop" type="button" onClick={cancel}>
                    STOP
                  </button>
                ) : (
                  <button
                    className="button-speak"
                    type="button"
                    onClick={() => {
                        speak({ text, voice, rate, pitch });
                      }
                    }
                  >
                    SPEAK
                  </button>
                )}
              </div>
              <div className="slider-area">
                <div className="rate" style={styleContainerRatePitch}>
                  <div style={styleFlexRow}>
                    <label htmlFor="rate">Rate: </label>
                    <div className="rate-value">{rate}</div>
                  </div>
                  <input
                    type="range"
                    min="0.0"
                    max="2"
                    defaultValue="0.8"
                    step="0.1"
                    id="rate"
                    onChange={(event) => {
                      setRate(event.target.value);
                    }}
                  />
                </div>
                <div className="pitch" style={styleContainerRatePitch}>
                  <div style={styleFlexRow}>
                    <label htmlFor="pitch">Pitch: </label>
                    <div className="pitch-value">{pitch}</div>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="2"
                    defaultValue="0.9"
                    step="0.1"
                    id="pitch"
                    onChange={(event) => {
                      setPitch(event.target.value);
                    }}
                  />
                </div>
              </div>
            </React.Fragment>
          )}
        </form>
      </div>
    </Container>
  );
};

export default SpeechSynthesis;