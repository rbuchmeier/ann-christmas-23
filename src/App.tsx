import './App.css';
import { Question } from './Question.tsx';
import { useState } from 'react';

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
    <div>
      <h1>Merry Christmas!</h1>
      <div>
        <Question
          question="Rikka was ____ in 2023"
          answer="born"
          callback={() => answerCallback('born')}
        />
        {result.born && (
          <span>
            b<strong>orn</strong>
          </span>
        )}
        <Question
          question="____ and Boomer's parents are good friends"
          answer="hank"
          callback={() => answerCallback('hank')}
        />
        {result.hank && (
          <span>
            <strong>Han</strong>k
          </span>
        )}
        <Question
          question="The night before Christmas"
          answer="eve"
          callback={() => answerCallback('eve')}
        />
        {result.eve && (
          <span>
            <strong>Ev</strong>e
          </span>
        )}
      </div>
      <div>
        <span>
          <strong>
            {result.eve && 'Ev'}
            {result.hank && 'an H'}
            {result.born && 'orn'}
          </strong>
        </span>
        {result.eve && result.hank && result.born && (
          <span>(Check your email)</span>
        )}
      </div>
    </div>
  );
}

export default App;
