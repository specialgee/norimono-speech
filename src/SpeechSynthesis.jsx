import React, { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import { Container } from './shared';

const SpeechSynthesis = (props) => {
  let textArea = props.textArea.current;

  let [text, setText] = useState('');
  const [rate, setRate] = useState(0.8);
  const [pitch, setPitch] = useState(1.3);
  const [voiceIndex, setVoiceIndex] = useState(null);
  const onEnd = () => {
    // do something here after speaking has finished
  };

  const { speak, cancel, speaking, supported, voices } = useSpeechSynthesis({
    onEnd,
  });

  let voice = voices[voiceIndex] || null;
  console.log(voices)

  const styleFlexRow = { display: 'flex', flexDirection: 'row' };
  const styleContainerRatePitch = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 12,
  };

  let showParameters = false;
  let parametersEl = document.getElementsByClassName("parameters-panel");

  function toggleParameters() {
    showParameters = !showParameters;

    if (showParameters) {
      parametersEl[0].style.visibility = "visible";
    } else {
      parametersEl[0].style.visibility = "hidden";
    }
  }

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
              <div>
                {/* <label className="message-label" htmlFor="message">テキスト</label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={text}
                  onChange={(event) => {
                    setText(event.target.value);
                  }}
                /> */}
                {speaking ? (
                  <button className="button-stop" type="button" onClick={cancel}>
                    STOP
                  </button>
                ) : (
                  <button
                    className="button-speak"
                    type="button"
                    onClick={() => {
                        text = textArea.state.text;
                        speak({ text, voice, rate, pitch });
                      }
                    }
                  >
                    SPEAK
                  </button>
                )}
              </div>
              <div className="parameters-wrapper">
                <div className="parameters-toggle">
                  <p onClick={(event) => {toggleParameters()}}>+</p>
                </div>
                <div className="parameters-panel">
                  <div className="voice-panel">
                    <label htmlFor="voiceScript">SCRIPT VOICE</label>
                    <select
                      id="voiceScript"
                      name="voiceScript"
                      value={voiceIndex || ''}
                      onChange={(event) => {
                        setVoiceIndex(event.target.value);
                        voice = voices[event.target.value];
                        console.log(voice)
                      }}
                    >
                      <option value="">Default</option>
                      {voices.map((option, index) => (
                        <option key={option.voiceURI} value={index}>
                          {`${option.lang} - ${option.name}`}
                        </option>
                      ))}
                    </select>
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
                        defaultValue="1.3"
                        step="0.1"
                        id="pitch"
                        onChange={(event) => {
                          setPitch(event.target.value);
                        }}
                      />
                    </div>
                  </div>
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