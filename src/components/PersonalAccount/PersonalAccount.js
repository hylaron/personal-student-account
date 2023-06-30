import './personalAccount.css'

import Loading from '../Loading/Loading.js';

import { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { fetchOrders } from '../../store/actions.js';

//для получение Orders из Redux
import { useSelector } from 'react-redux';
import { getOrders, getCard } from './../../store/selectors.js';

const PersonalAccount = () => {
    const [maxCourse, setMaxCourse] = useState(1);
    const dispatch = useDispatch();

    let studentData = useSelector(getOrders);
    let cardData = useSelector(getCard); 

    useEffect(() => {
        let cardNumber = cardData.card[0].card_number
        dispatch(fetchOrders(cardNumber));
    }, [dispatch]);

    useEffect(() => {
        if (studentData.orders) {
            const newMaxCourse = Math.max(...studentData.orders.map(o => o.course));
            setMaxCourse(newMaxCourse);
        }
    }, [studentData.orders]);
    if (studentData.orders != null) {
        let personF = studentData.orders[0].last_name
        let personN = studentData.orders[0].first_name
        let personP = studentData.orders[0].second_name
        let groupNum = studentData.orders[0].group_num

        return (
            <div>
                <div className="header_orders">
                    <div className="header_orders--fio"><b>{personF} {personN} {personP}</b></div>
                    <div className="header_orders--group">Группа: <b>{groupNum}</b></div>
                    <div className="header_orders--group">Курс студента: <b>{maxCourse}</b></div>
                    <div className="header_orders--book_num">Количество приказов: <b>{studentData.orders.length}</b></div>
                </div>
                <hr />
                <div className="body_orders">
                    <div className="body_orders__titul"><h3>Приказы:</h3></div>
                    {[...Array(studentData.orders.length)].map((_, index) =>
                        <div key={index}>
                            <div className='body_orders__card--date'>
                                <i><b>{studentData.orders[index]['date_number'].split(',')[1]}</b></i>
                            </div>
                            <div key={index} className="body_orders__card">
                                <div className='body_orders__card__index'>
                                    <i><b>№{index + 1}</b></i>
                                </div>
                                <div className='body_orders__card__index-number'>
                                    <div>
                                        <b>Номер приказа:</b><br />
                                        {studentData.orders[index]['date_number'].split(',')[0]}
                                    </div>
                                </div>
                                <div className='body_orders__card--fio'>
                                    <b>ФИО студента:</b><br />
                                    {studentData.orders[index]['last_name'] + ' '}
                                    {studentData.orders[index]['first_name'] + ' '}
                                    {studentData.orders[index]['second_name']}
                                </div>
                                <div className='body_orders__card--content'>
                                    <hr />
                                    <b>Заголовок приказа:</b><br />
                                    {studentData.orders[index]['content']}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
    return (
        <Loading/>
    )
}

export default PersonalAccount