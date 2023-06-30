import React, { useEffect, useState } from 'react';
import './loading.css';

const LoadingProblem = () => {
  return <div className='loading-problem'><p>Упс! Что-то пошло не так.</p></div>;
};

const Loading = () => {
  const [showProblem, setShowProblem] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowProblem(true);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className='loading-page'>
      <div className="gooey">
        <span className="dot"></span>
        <div className="dots">
          <span className="dots__span"></span>
          <span className="dots__span"></span>
          <span className="dots__span"></span>
        </div>
      </div>
      {showProblem && <LoadingProblem />}
    </div>
  );
};

export default Loading;