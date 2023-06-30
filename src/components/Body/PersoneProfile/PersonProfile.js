import { Link } from 'react-router-dom';
import './personal-profile.css';
import { useSelector, useDispatch } from 'react-redux';
import { getCard } from './../../../store/selectors.js';
import { signOut } from '../../../store/actions';
import { useState, useEffect } from 'react';
const PersonProfileAvatar = () => {
  return (
    <>
      <div className="personal-profile-avatar_block">
        <img className="personal-profile-avatar" alt='Изображие профиля' src={require('../../../ico/profile.png')} />
      </div>
    </>
  );
};

const PersonProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('isDarkMode') === 'true'
  );

  useEffect(() => {
    if (isDarkMode) {
      applyDarkModeStyles();
    } else {
      removeDarkModeStyles();
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('isDarkMode', newDarkMode);
  };



  const applyDarkModeStyles = () => {
    let link = document.getElementById('dark-mode-styles');
    if (!link) {
      link = document.createElement('link');
      link.href = './style/dark-mode.css'; // Путь к файлу со стилями для режима слабовидящих
      link.rel = 'stylesheet';
      link.id = 'dark-mode-styles';
      document.head.appendChild(link);
    }
  };

  const removeDarkModeStyles = () => {
    const link = document.getElementById('dark-mode-styles');
    if (link) {
      link.remove();
    }
  };

  const toggleProfile = () => {
    setIsOpen(!isOpen);
  };

  const onSignOut = () => {
    setIsOpen(false)
    dispatch(signOut());
  };

  let studentData = useSelector(getCard);
  if (studentData.card && !studentData.card.hasOwnProperty('message')) {
    let personF = studentData.card[0].last_name;
    let personN = studentData.card[0].first_name;
    let personP = studentData.card[0].second_name;
    let Card = studentData.card[0].card_number;
    personN = personN[0];
    personP = personP[0];

    let highContrast = document.getElementById('high-contrast-styles');
    return (
      <div>
        <div className={`personal-profile-block`} onClick={toggleProfile}>

          <PersonProfileAvatar />
          <p className="personal-profile-block__content">
            <b>{personF} {personN}.{personP}.</b>
            <br />
            <font size="2"><i>№{Card}</i></font>
          </p>
        </div>
        {isOpen && (
          <div className="personal-profile-menu">
            <p>Меню профиля</p>
            <div className='dark-mod__switch'>
              <div className='toggle-switch'>
                <label>
                  <input
                    type='checkbox'
                    checked={isDarkMode}
                    onChange={toggleDarkMode}
                  />
                  <span className='slider'></span>
                </label>
              </div>
              <div className='toggle-switch__description'>
                {!highContrast ? (
                  <>Тёмный режим</>
                ) : <>Светлый режим для слабовидящих</>}
              </div>
            </div>
            <hr />
            <Link to="/vhod" className='sign-out' onClick={onSignOut}>Выйти</Link>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="personal-profile-block">
      <PersonProfileAvatar />
      <p className="personal-profile-block__content">
        <Link to="/vhod">Войти</Link>
      </p>
    </div>
  );
};

export default PersonProfile;