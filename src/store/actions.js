// ПОЛУЧЕНИЕ --SHEDULE--
export const fetchShedule = (grNum) => {
  return dispatch => {
    let requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch(`http://localhost:5000/api/shedule/shedule?gr_num=${grNum}`, requestOptions)    
    // fetch(`http://localhost:5000/api/shedule/shedule?gr_num=191701с`, requestOptions)
      .then(response => response.json())
      .then(result => {
        dispatch(setShedule(result), console.log('setShedule',result));
      })
      .catch(error => console.log('error', error));
  };
};
// ПОЛУЧЕНИЕ --GRADE--
export const fetchGrade = (idStudent) => {
  return dispatch => {
    let requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch(`http://localhost:5000/api/grade/grade?id_student=${idStudent}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        dispatch(setGrade(result), console.log('setGrade',result));
      })
      .catch(error => console.log('error', error));
  };
};
// ПОЛУЧЕНИЕ --ORDERS--
export const fetchOrders = (cardNumber) => {
  return dispatch => {
    let requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    //fetch(`http://localhost:5000/api/orders/orders?card=20191119028686`, requestOptions)
    fetch(`http://localhost:5000/api/orders/orders?card=${cardNumber}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        dispatch(setOrders(result), console.log('setOrders',result));
      })
      .catch(error => console.log('error', error));
  };
};
// ПОЛУЧЕНИЕ --PayPage--
export const fetchPayPage = () => {
  return dispatch => {
    let requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch(`http://localhost:5000/api/pay/pay`, requestOptions)
      .then(response => response.json())
      .then(result => {
        dispatch(setPayPage(result), console.log('setPayPage',result));
      })
      .catch(error => console.log('error', error));
  };
};
// ПОЛУЧЕНИЕ --LoginPage--
export const fetchSignIn = (card) => {
  return dispatch => {
    let requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch(`http://localhost:5000/api/user/auth?card=${card}`, requestOptions)
      .then((response) => response.json())
      .then(result => {
        dispatch(setCard(result), console.log('setCard',result));
      })
      .catch((error) => console.log('error', error));
  };
};

export const setShedule = (shedule) => ({
  type: 'SET_SHEDULE',
  payload: shedule
});

export const setGrade = (grade) => ({
  type: 'SET_GRADE',
  payload: grade
});

export const setOrders = (orders) => ({
  type: 'SET_ORDERS',
  payload: orders
});

export const setPayPage = (payPage) => ({
  type: 'SET_PAY_PAGE',
  payload: payPage
});

export const setCard = (card) => ({
  type: 'SET_CARD',
  payload: card
});

export const signOut = () => {
  return {
    type: 'SIGN_OUT',
  };
};