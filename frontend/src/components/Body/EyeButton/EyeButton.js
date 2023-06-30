import React, { useState, useEffect } from 'react';
import './eye-button.css'

const EyeButton = () => {
  const [isHighContrast, setIsHighContrast] = useState(
    localStorage.getItem('isHighContrast') === 'true'
  );

  useEffect(() => {
    if (isHighContrast) {
      applyHighContrastStyles();
    } else {
      removeHighContrastStyles();
    }
  }, [isHighContrast]);

  const toggleHighContrast = () => {
    const newHighContrast = !isHighContrast;
    setIsHighContrast(newHighContrast);
    localStorage.setItem('isHighContrast', newHighContrast);
  };

  const applyHighContrastStyles = () => {
    let link = document.getElementById('high-contrast-styles');
    if (!link) {
      link = document.createElement('link');
      link.href = './style/hight-contrast.css'; // Путь к файлу со стилями для режима слабовидящих
      link.rel = 'stylesheet';
      link.id = 'high-contrast-styles';
      document.head.appendChild(link);
    }
  };

  const removeHighContrastStyles = () => {
    const link = document.getElementById('high-contrast-styles');
    if (link) {
      link.remove();
    }
  };

  return (
    <button className="eye-button" onClick={toggleHighContrast}>
      <div className="eye-button__block">
        <img className="eye-button__img" src={require('../../../ico/eye.png')} alt="Версия для слабовидящих" />
        Версия для слабовидящих
      </div>
    </button>
  );
};

export default EyeButton;
