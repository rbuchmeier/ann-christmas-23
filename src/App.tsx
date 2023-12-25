import './App.css';
import { Question } from './Question.tsx';
import { useState } from 'react';
import Stars from './Stars.tsx';

function App() {
  const [result, setResult] = useState({
    born: false,
    hank: false,
    eve: false,
  });
  const answerCallback = (answer: 'born' | 'hank' | 'eve') => {
    setResult({ ...result, [answer]: true });
  };
  return (
    <div className="app">
      <Stars />
      <h1>Merry Christmas!</h1>
      <div>
        <Question
          question="Rikka was ____ in 2023"
          answer="born"
          callback={() => answerCallback('born')}
        />
        {result.born && (
          <span>
            b<span className="highlight">orn</span>
          </span>
        )}
        <Question
          question="____ and Boomer's parents are good friends"
          answer="hank"
          callback={() => answerCallback('hank')}
        />
        {result.hank && (
          <span>
            <span className="highlight">Han</span>k
          </span>
        )}
        <Question
          question="The night before Christmas"
          answer="eve"
          callback={() => answerCallback('eve')}
        />
        {result.eve && (
          <span>
            <span className="highlight">Ev</span>e
          </span>
        )}
      </div>
      <div>
        <span className="highlight">
          {result.eve && 'Ev'}
          {result.hank && 'an H'}
          {result.born && 'orn'}
        </span>
        {result.eve && result.hank && result.born && (
          <span>&nbsp;(Check your email)</span>
        )}
      </div>
    </div>
  );
}

export default App;
