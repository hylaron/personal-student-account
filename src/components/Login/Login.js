import React, { useState, useEffect } from 'react';
import './Login.css';
import { useDispatch } from 'react-redux';
import { fetchSignIn } from '../../store/actions.js';

const SignIn = () => {
  const [card, setCard] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const storedCard = localStorage.getItem('rememberedCard');
    if (storedCard) {
      setCard(storedCard);
    }
  }, []);

  const rememberCard = (cardNumber) => {
    localStorage.setItem('rememberedCard', cardNumber);
  };

  const forgetCard = () => {
    localStorage.removeItem('rememberedCard');
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchSignIn(card));
  };

  const isSubmitDisabled = card.length !== 14;

  return (
    <div className='login-container'>
      <div className='login-block'>
        <h1 className='text-center'>Вход</h1>
        <form className='login-block__form' onSubmit={onFormSubmit}>
          <label>Введите номер карты студента:</label>
          <p>20191119028686</p>
          <input
            type='number'
            id='card'
            placeholder='Номер карты'
            value={card}
            onChange={(e) => setCard(e.target.value)}
            className='login-block__form--input'
          />
          <div>
            <label>
              <input
                type='checkbox'
                onChange={(e) => {
                  if (e.target.checked) {
                    rememberCard(card);
                  } else {
                    forgetCard();
                  }
                }}
              />
              Запомнить номер карты
            </label>
          </div>
          <button type='submit' className='login-block__form--button' disabled={isSubmitDisabled}>
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;