import React from 'react';
import '../../style/Header.css'
import HeaderMenu from './HeaderMenu'

import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux';
import { getCard } from './../../store/selectors.js';


const Header = () => {
    const Hr = () => <hr className='header--hr' />
    let studentData = useSelector(getCard)
    if (studentData.card && studentData.card !== '{"message":"Не задан card"}') {
        return (
            <header>
                <div className='header-component'>
                    <Link to="/"><div className='header-component__logo'> </div></Link>
                    <div className='header-menu header-component'>
                        <Hr />
                        <HeaderMenu greetTarget='Расписание' />

                        <HeaderMenu greetTarget='Успеваемость' />
                        <HeaderMenu greetTarget='Приказы' />
                        <HeaderMenu greetTarget='Оплата за обучение' />

                        <Hr />
                        <HeaderMenu greetTarget='Служба поддержки' />
                    </div>
                </div>
                <div className='header-component header-footer'>
                    &copy; 2023 - Все права защищены
                </div>
            </header>
        )
    } else {
        return (
            <header>
                <div className='header-component'>
                    <Link to="/"><div className='header-component__logo' /></Link>
                    <Hr />

                    <div className='header-menu header-component'>
                        <HeaderMenu greetTarget='Вход' />
                        <Hr />
                        <HeaderMenu greetTarget='Оплата за обучение' />
                        <Hr />
                        <HeaderMenu greetTarget='Служба поддержки' />
                    </div>
                </div>
                <div className='header-component header-footer'>
                    &copy; 2023 - Все права защищены
                </div>

            </header>
        )
    }
}
export default Header


















