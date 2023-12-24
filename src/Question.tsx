import { useState } from 'react';

type QuestionProps = {
  question: string;
  answer: string;
  callback: () => void;
};
export function Question({ question, answer, callback }: QuestionProps) {
  const [value, setValue] = useState('');
  const [disabled, setDisabled] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.toLowerCase() === answer) {
      setDisabled(true);
      callback();
    }
    setValue(e.target.value.toLowerCase());
  };
  return (
    <div>
      <p>{question}</p>
      <input
        type="text"
        onChange={handleChange}
        value={value}
        disabled={disabled}
      />
    </div>
  );
}
