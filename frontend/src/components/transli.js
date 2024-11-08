import React, { useState } from 'react';
import '../assets/transli.css'; // Ensure you have your styles for the page

const Transli = () => {
  // State for input text, translated text, source and target languages
  const [sourceLanguage, setSourceLanguage] = useState('en');
  const [targetLanguage, setTargetLanguage] = useState('en');
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  // Function to handle translation
  const translateText = async () => {
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(inputText)}&langpair=${sourceLanguage}|${targetLanguage}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.responseData && data.responseData.translatedText) {
        setOutputText(data.responseData.translatedText);
      } else {
        setOutputText("Translation failed. Please try again.");
      }
    } catch (error) {
      console.error("Translation failed:", error);
      setOutputText("Translation failed. Please try again.");
    }
  };

  return (
    <div className="container">
      <h1>TRANSLI</h1>

      {/* Source Language Selector */}
      <label htmlFor="source-language">Source Language:</label>
      <select
        id="source-language"
        value={sourceLanguage}
        onChange={(e) => setSourceLanguage(e.target.value)}
      >
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="es">Spanish</option>
        {/* Add more language options here */}
      </select>

      {/* Target Language Selector */}
      <label htmlFor="target-language">Target Language:</label>
      <select
        id="target-language"
        value={targetLanguage}
        onChange={(e) => setTargetLanguage(e.target.value)}
      >
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="es">Spanish</option>
        <option value="de">German</option>
        <option value="it">Italian</option>
        <option value="pt">Portuguese</option>
        <option value="nl">Dutch</option>
        <option value="ru">Russian</option>
        <option value="ja">Japanese</option>
        <option value="zh-CN">Chinese (Simplified)</option>
        <option value="ko">Korean</option>
        <option value="ar">Arabic</option>
        <option value="tr">Turkish</option>
        {/* Add more language options here */}
      </select>

      {/* Input Text */}
      <label htmlFor="input-text">Input Text:</label>
      <textarea
        id="input-text"
        rows="4"
        cols="50"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />

      {/* Translate Button */}
      <button onClick={translateText}>Translate</button>

      {/* Output Text */}
      <label htmlFor="output-text">Translated Text:</label>
      <textarea
        id="output-text"
        rows="4"
        cols="50"
        readOnly
        value={outputText}
      />
    </div>
  );
};

export default Transli;
