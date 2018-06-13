import React from 'react';

import './Stars.css';

const Stars = ({ solidStars, emptyStars }) => {
  return (
    <div>
      {solidStars.map((star, index) => <span key={index+10}className="solidStar">&#x2605;</span>)}
      {emptyStars.map((star, index) => <span key={index+20}className="emptyStar">&#x2606;</span>)}
    </div>
  )
}
export default Stars;