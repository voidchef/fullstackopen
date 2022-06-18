import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
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
      good {good}
      <br />
      neutral {neutral}
      <br />
      bad {bad}
      <br />
      all {good + neutral + bad}
      <br />
      average {(good * 1 + bad * -1) / (good + neutral + bad)}
      <br />
      positive {(good * 100) / (good + neutral + bad)}
    </div>
  );
};

export default App;
