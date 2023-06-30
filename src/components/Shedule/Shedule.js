import './shedule.css'

import Loading from '../Loading/Loading.js';

import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { fetchShedule } from '../../store/actions.js';

//для получение Shedule из Redux
import { useSelector } from 'react-redux';
import { getShedule, getCard } from './../../store/selectors.js';


const ShedulePage = () => {
    const [maxWeek, setMaxWeek] = useState(1);
    const [state, setState] = useState(maxWeek);
    const dispatch = useDispatch();
    let studentData = useSelector(getCard);
    let sheduleData = useSelector(getShedule);
    useEffect(() => {
        if (studentData.card && !studentData.card.hasOwnProperty('message')) {
          let grNum = studentData.card[0].group_num;
          dispatch(fetchShedule(grNum));
        }
      }, [dispatch, studentData]);

    useEffect(() => {
        if (sheduleData.shedule) {
            const newMaxWeek = Math.max(...sheduleData.shedule.map(o => o.week_num));
            setMaxWeek(newMaxWeek);
        }
    }, [sheduleData.shedule]);

    if (sheduleData.shedule != null) {
        //выборка рассписания недели
        let dayShedule = []
        const GetLocalStorageShedule = (week_num) => {
            week_num = state
            if (week_num.n !== undefined && week_num.n !== null) {
                week_num = week_num.n
            }
            let weekDayShedule = sheduleData.shedule.filter(function (item) {
                return item.week_num === week_num
            })
            dayShedule = []
            for (let i = 0; i < weekDayShedule.length; i++) {
                let day = new Date(weekDayShedule[i].date)
                let fio = weekDayShedule[i].fio
                let subj = weekDayShedule[i].subj
                let type = weekDayShedule[i].type
                let clrm = weekDayShedule[i].clrm
                let timeId = weekDayShedule[i].time_id
                dayShedule.push({ id: i, WeekDay: day.getDay(), time: day, timeId: timeId, fio: fio, subj: subj, type: type, clrm: clrm })
            }

            const SheduleWeekDays = (props) => {
                let havo = dayShedule.filter(function (d) { return d.WeekDay === props.n; })
                havo.sort((first, second) => { return first.timeId > second.timeId })
                if (havo.length < 1) {
                    return (
                        <div className='body-content__body__weekdays__block empty'>
                            <h4 className='body-content__body__weekdays__block--week_day_name'><b><i>{props.weekDayName}</i></b></h4>
                        </div>
                    )
                }

                //Для показа времени начала занятий по weekDayShedule[i].time_id && havo[i].time_id
                const sheduleTime = {
                    0: ['00:00', '-', '00:00'],
                    1: ['08:00', '-', '09:20'],
                    2: ['09:35', '-', '10:55'],
                    3: ['11:05', '-', '12:25'],
                    4: ['13:00', '-', '14:20'],
                    5: ['14:30', '-', '15:50'],
                    6: ['16:00', '-', '17:20'],
                    7: ['17:30', '-', '18:50'],
                    8: ['19:00', '-', '20:20'],
                    9: ['00:00', '-', '00:00'],
                    10: ['00:00', '-', '00:00'],
                    11: ['08:00', '-', '09:20'],
                    12: ['09:35', '-', '10:55'],
                    13: ['11:05', '-', '12:25'],
                    14: ['13:00', '-', '14:20'],
                    15: ['16:00', '-', '17:20'],
                    16: ['17:30', '-', '18:50'],
                    17: ['19:00', '-', '20:20'],
                    18: ['20:30', '-', '21:50'],
                    19: ['21:50', '-', '23:10'],
                    20: ['09:35', '-', '10:55']
                }
                //Настройки отображения даты
                const options = {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                    timezone: 'UTC'
                };
                let date = (havo[0][('time')].toLocaleString("ru", options))
                return (
                    <div className='body-content__body__weekdays__block'>
                        <div className='body-content__body__weekdays__block--week_day_name'><h4><b><i>{props.weekDayName}</i></b></h4><i>{date}</i></div>
                        <div className='body-content__body__weekdays__block__lessons'>
                            {[...Array(havo.length)].map((_, index) =>
                                <div className='body-content__body__weekdays__block__lessons--lesson'
                                    key={index}>
                                    <div className='type'><i>{sheduleTime[havo[index]['timeId']]}</i><b>{havo[index]['type']}</b></div><br />
                                    <div className='subject_fio'>
                                        <div className='subject_name'>
                                            <b>{havo[index]['subj']}</b><div className='subject_name__clrm'>к. {havo[index]['clrm']}</div></div>
                                        <i>{havo[index]['fio']}</i>
                                    </div>

                                </div>
                            )}
                        </div>
                    </div>
                )
            }

            //GetLocalStorageShedule RETURN
            return (
                <div className='body-content__body__weekdays'>
                    <SheduleWeekDays n={1} weekDayName={'Пн.'} />
                    <SheduleWeekDays n={2} weekDayName={'Вт.'} />
                    <SheduleWeekDays n={3} weekDayName={'Ср.'} />
                    <SheduleWeekDays n={4} weekDayName={'Чт.'} />
                    <SheduleWeekDays n={5} weekDayName={'Пт.'} />
                    <SheduleWeekDays n={6} weekDayName={'Сб.'} />
                </div>
            )

        }

        GetLocalStorageShedule(maxWeek)
        const currentDate = new Date();
        const startYear = currentDate.getMonth() < 8 ? currentDate.getFullYear() - 1 : currentDate.getFullYear();
        const startDate = new Date(startYear, 8, 1); // 1 сентября текущего или предыдущего года
        const millisecondsPerWeek = 7 * 24 * 60 * 60 * 1000;
        const timeDifference = currentDate.getTime() - startDate.getTime();
        let TodayWeekNumber = Math.floor(timeDifference / millisecondsPerWeek) + 1;

        return (
            <div>
                <h4>Текушая неделя: {TodayWeekNumber}</h4>
                <Form.Select className='content__body__weekdays__selector'>
                    <option>Выбрать номер недели</option>
                    {[...Array(maxWeek)].map((_, index) => <option onClick={() => GetLocalStorageShedule(setState(index + 1))} key={index + 1} value={index + 1}>{index + 1}</option>)}
                </Form.Select>
                <GetLocalStorageShedule n={maxWeek} />
            </div>
        )
    }
    return (
        <Loading />
    )
}


export default ShedulePage