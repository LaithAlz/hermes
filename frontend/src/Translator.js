import React, { useState } from 'react';
import axios from 'axios';
import { ReactMediaRecorder } from 'react-media-recorder';

const Translator = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  // Text translation handler
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleTextTranslate = async () => {
    try {
      const response = await axios.post('http://localhost:5000/translate', {
        text: inputText,
      });
      setTranslatedText(response.data.translatedText);
    } catch (error) {
      console.error('Error translating text:', error);
    }
  };

  // Voice translation handler
  const handleVoiceTranslate = async (blob) => {
    const formData = new FormData();
    formData.append('audio', blob);

    try {
      const response = await axios.post('http://localhost:5000/translate-voice', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setTranslatedText(response.data.translatedText);
    } catch (error) {
      console.error('Error translating voice:', error);
    }
  };

  return (
    <div>
      <h1>Translator</h1>

      {/* Text Translation */}
      <textarea
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text to translate..."
      />
      <button onClick={handleTextTranslate}>Translate Text</button>

      {/* Voice Translation */}
      <div>
        <h2>Voice Translation</h2>
        <ReactMediaRecorder
          audio
          render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
            <div>
              <p>{status}</p>
              <button onClick={startRecording}>Start Recording</button>
              <button onClick={stopRecording}>Stop Recording</button>
              <audio src={mediaBlobUrl} controls />
              {mediaBlobUrl && (
                <button
                  onClick={() => {
                    fetch(mediaBlobUrl)
                      .then(res => res.blob())
                      .then(blob => handleVoiceTranslate(blob));
                  }}
                >
                  Upload and Translate Voice
                </button>
              )}
            </div>
          )}
        />
      </div>

      {/* Display Translated Text */}
      {translatedText && (
        <div>
          <h3>Translated Text:</h3>
          <p>{translatedText}</p>
        </div>
      )}
    </div>
  );
};

export default Translator;
