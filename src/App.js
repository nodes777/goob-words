import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import { Container, Col, Row } from "react-bootstrap";

import GoobWord from "./GoobWord";
import GoobWordChanger from "./GoobWordChanger";
import Meaning from "./Meaning";

import { getRandomGoobWord } from "./getRandomGoobWord";
import { generateAllGoobWords } from "./generateAllGoobWords";

function App() {
  const [currGoobWord, setGoobWord] = useState({ word: "Goob", meaning: "" });
  const allGoobWords = generateAllGoobWords();

  return (
    <header className="App-header">
      <GoobWord goobword={currGoobWord.word} />
      <Meaning meaning={currGoobWord.meaning} />
      <GoobWordChanger
        func={() => setGoobWord(getRandomGoobWord(allGoobWords))}
      />
    </header>
  );
}

export default App;
