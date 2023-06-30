import './Grade.css'
import Loading from '../Loading/Loading';
import { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { fetchGrade } from '../../store/actions.js';

//для получение Grade из Redux
import { useSelector } from 'react-redux';
import { getGrade, getCard } from './../../store/selectors.js';

const Grade = () => {
    const [maxSemestr, setMaxSemestr] = useState(1);
    const dispatch = useDispatch();

    let gradeData = useSelector(getGrade);
    let studentData = useSelector(getCard)
    useEffect(() => {
        let idStudent = studentData.card[0].id_student
        dispatch(fetchGrade(idStudent));
    }, [dispatch, studentData]);

    useEffect(() => {
        if (gradeData && gradeData.grade) {
            const newMaxGrade = Math.max(...gradeData.grade.map(o => o.semestr));
            setMaxSemestr(newMaxGrade);
        }
    }, [gradeData]);

    let personF = studentData.card[0].last_name
    let personN = studentData.card[0].first_name
    let personP = studentData.card[0].second_name
    let groupNum = studentData.card[0].group_num

    const GradeSemestr = (props) => {
        let havo = []
        if (gradeData && gradeData.grade) {
            havo = gradeData.grade.filter(function (d) { return d.semestr === props.n; })
        }
        havo.filter(function (d) { return d.date === props.n; })
        return (
            <div className="body_grade__semstr">
                <h3 className="body_grade__semstr--title">{props.n} Семестр</h3>
                <div className="body_grade__semstr__block">
                    {[...Array(havo.length)].map((_, index) =>
                        <div key={index} className="body_grade__semstr--card">
                            <div className="body_grade__semstr--card_type"><div><b><i>{havo[index]['type'][0].toUpperCase()}{havo[index]['type'].slice(1)}</i></b></div><div><i>№{index + 1}</i></div></div>
                            <div className="body_grade__semstr--card__subject_name">{havo[index]['subject_name']}</div>
                            <div>
                                <hr />
                                <div className="body_grade__semstr--card__mark_data">
                                    <div><i>{havo[index]['data'] !== '0' ? (havo[index]['data']) : null}</i></div>
                                    <div><b>{havo[index]['name'][0].toUpperCase()}{havo[index]['name'].slice(1)}</b></div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <hr />
            </div>
        );
    };

    if (gradeData.grade != null) {
        return (
            <div>
                <div className="header_grade">
                    <div className="header_grade--fio"><b>{personF} {personN} {personP}</b></div>
                    <div className="header_grade--group">Группа: <b>{groupNum}</b></div>
                    <div className="header_grade--book_num">Зач.книжка: <b>{groupNum}-36</b></div>
                </div>
                <hr />
                <div className="body_grade">
                    <div className="body_grade__titul"><h3>Успеваемость:</h3></div>
                </div>

                {[...Array(maxSemestr)].map((_, index) =>
                    <GradeSemestr key={index} n={index + 1} />
                )}

            </div>
        )
    }
    return (
        <Loading />
    )
}

export default Grade