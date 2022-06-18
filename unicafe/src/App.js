import { useState } from "react";

const Statistics = (props) => {
  const { good, neutral, bad } = props;
  const total = good + neutral + bad;
  const average = (good * 1 + bad * -1) / total;
  const positive = (good * 100) / total;
  return (
    <div>
      good {good}
      <br />
      neutral {neutral}
      <br />
      bad {bad}
      <br />
      all {total}
      <br />
      average {average}
      <br />
      positive {positive}
    </div>
  );
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
      <button onClick={() => handleClick("good")}>good</button>
      <button onClick={() => handleClick("neutral")}>neutral</button>
      <button onClick={() => handleClick("bad")}>bad</button>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
