// import React, { Component, useState } from 'react';

// import Section from './section';
// import FeedbackOptions from './feedback-options';
// import Statistics from './statistics';
// import Notification from './notification';

// class Rating extends Component {
//   render() {
//     return (
//       <div>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={['good', 'neutral', 'bad']}
//             onLeaveFeedback={this.handleAddPoint}
//           />
//         </Section>

//         <Section title="Statistics">
//           {total === 0 ? (
//             <Notification message="There is no feedback" />
//           ) : (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={positivePercentage}
//             />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }

// export default Rating;
