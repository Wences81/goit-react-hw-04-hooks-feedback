import React, { useState } from 'react';
import Feedback from '../FeedbackOptions/Feedback';
import Statistics from '../Statistics/Statistics';
import SectionTitle from '../SectionTitle/SectionTitle';
import Notification from '../Notification/Notification';
import { MainContainer } from './App.styled';

export default function App() {
  const [feedbacks, setFeedbacks] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleIncrement = option => {
    setFeedbacks(prevState => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return Object.values(feedbacks).reduce(
      (acc, feedback) => acc + feedback,
      0,
    );
  };

  const countPositiveFeedbackPercentage = total => {
    total = countTotalFeedback();
    return Math.round((feedbacks.good * 100) / total);
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage(total);
  const totalFeedback = total > 0;

  return (
    <MainContainer>
      <SectionTitle title="Please leave feedback">
        <Feedback
          options={['good', 'neutral', 'bad']}
          handleIncrement={handleIncrement}
        />
      </SectionTitle>
      <SectionTitle title="Statistics">
        {totalFeedback && (
          <Statistics
            good={feedbacks.good}
            neutral={feedbacks.neutral}
            bad={feedbacks.bad}
            totalFeedback={totalFeedback}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}

        {!totalFeedback && <Notification message="No feedback given" />}
      </SectionTitle>
    </MainContainer>
  );
}
