import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const StatisticLine = ({ text, value }) => {
  return (
    <>
      {text} {value}
      <br />
    </>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = (good * 1 + bad * -1) / total;
  const positive = (good * 100) / total;

  if (good === 0 && neutral === 0 && bad === 0) {
    return <div>No feedback given</div>;
  } else {
    return (
      <div>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positive} />
      </div>
    );
  }
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = (btn) => {
    if (btn === "good") setGood(good + 1);
    else if (btn === "neutral") setNeutral(neutral + 1);
    else setBad(bad + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => handleClick("good")} text="good" />
      <Button handleClick={() => handleClick("neutral")} text="neutral" />
      <Button handleClick={() => handleClick("bad")} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
