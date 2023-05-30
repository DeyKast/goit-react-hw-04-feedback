import React, { useState } from 'react';

import Section from './section';
import FeedbackOptions from './feedback-options';
import Statistics from './statistics';
import Notification from './notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad; 
  const positivePercentage = Math.round((100 * good) / total);

  const handleAddPoint = point => {
    if (point === 'good') {
      setGood(prevGood => prevGood + 1);
    } else if (point === 'neutral') {
      setNeutral(prevNeutral => prevNeutral + 1);
    } else if (point === 'bad') {
      setBad(prevBad => prevBad + 1);
    }
  };
  return (
    <div>
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={handleAddPoint}
          />
        </Section>

        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </div>
    </div>
  );
};
