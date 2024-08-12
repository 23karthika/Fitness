// import React from 'react'

// export default function PersonalWorkout() {
//   return (
//     <div>
//         <h1 style={{fontFamily:'opensans-heavy',lineHeight:'1.1',textAlign:'center',marginBottom:'25px',fontSize:'3rem',fontWeight:'bolder'}}>
//                     Muscle Building Workouts
//                   </h1>
//                   <p style={{textAlign:'center',margin:'0 auto 25px',maxWidth:'800px',fontSize:'1.3rem',lineHeight:'1.6',textRendering:'optimizeLegibility'}}>
//                     Our workouts database has hundreds of free workout plans designed for building muscle. 
//                     The workouts are created by fitness experts and come with a free downloadable PDF you can reference when training. 
//                     Use the filters below to find the best workout for your goal, training experience and equipment access.
//                   </p>
//     </div>
//   )
// }

import React from 'react';
import WorkoutDetails1 from './WorkoutDetails1/WorkoutDetails1';
import { useParams } from 'react-router-dom';

export default function PersonalWorkout({ workouts }) {
  const { userId } = useParams(); // Assuming userId is used elsewhere, like for fetching personalized data

  return (
    <div>
      <h1 style={{fontFamily:'opensans-heavy',lineHeight:'1.1',textAlign:'center',marginBottom:'25px',fontSize:'3rem',fontWeight:'bolder'}}>
         Workouts
      </h1>
      <p style={{textAlign:'center',margin:'0 auto 25px',maxWidth:'800px',fontSize:'1.3rem',lineHeight:'1.6',textRendering:'optimizeLegibility'}}>
        Our workouts database has hundreds of free workout plans designed for building muscle. 
        The workouts are created by fitness experts and come with a free downloadable PDF you can reference when training. 
        Use the filters below to find the best workout for your goal, training experience and equipment access.
      </p>
      <WorkoutDetails1 workouts={workouts} />
    </div>
  );
}
