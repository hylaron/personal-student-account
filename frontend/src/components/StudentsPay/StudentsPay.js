import Loading from '../Loading/Loading.js';

import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { fetchPayPage } from '../../store/actions.js';

//для получение PayPage из Redux
import { useSelector } from 'react-redux';
import { getPayPage } from './../../store/selectors.js';


// Remove trash from recived data
const StudentsPay = () => {
    const dispatch = useDispatch();

    let payPageStorage = useSelector(getPayPage);

    useEffect(() => {
        dispatch(fetchPayPage());
    }, [dispatch]);

    if (payPageStorage.payPage != null) {
        return (
        <>
            <h3>{payPageStorage.payPage[0].title}</h3>
            <div dangerouslySetInnerHTML={{
                __html: payPageStorage.payPage[0]['txt']
                    .replace(/<p>&nbsp;/g, '')
                    .replace(/style=(?:(['"]).*?\1|.)*?>/g, '>')
                    .replace(/<table(?:(['"]).*?\1|.)*?>/g, '<table style="border: 1px solid black;">')
                    .replace(/<td(?:(['"]).*?\1|.)*?>/g, '<td style="border: 1px solid black;">')
                    .replace(/[«"]?Минск[а-яё]* инновационн[а-яё]* университет[а-яё]*[»"]?/g, '«Название университета»')
            }}></div>
        </>
        )
    }
    return (
        <Loading/>
    )
}

export default StudentsPay