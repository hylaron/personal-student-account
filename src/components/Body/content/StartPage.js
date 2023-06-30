import LoginForm from '../../Login/Login'

import { useSelector } from 'react-redux';
import { getCard } from './../../../store/selectors.js';

const StartPage = (props) => {
    let studentData = useSelector(getCard)
    if (studentData.card && studentData.card !== '{"message":"Не задан card"}' && studentData.card !== '{"message":"Пользователь с таким номером карты не найден"}') {
        return (
            <>
                {props.children}
            </>
        )
    } else {
        return (
            <LoginForm />
        )
    }
}

export default StartPage
