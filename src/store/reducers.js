const initialState = {
  shedule: null,
  grade: null,
  orders: null,
  payPage: null,
  card: null,
  isAuthenticated: false, // добавлено новое свойство состояния
};

export const sheduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SHEDULE':
      return {
        ...state,
        shedule: action.payload,
      };
    case 'SIGN_OUT': // обработка действия выхода из системы
      return {
        ...state,
        shedule: null, // сброс значения при выходе из системы
      };
    default:
      return state;
  }
};

export const gradeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_GRADE':
      return {
        ...state,
        grade: action.payload,
      };
    case 'SIGN_OUT': // обработка действия выхода из системы
      return {
        ...state,
        grade: null, // сброс значения при выходе из системы
      };
    default:
      return state;
  }
};

export const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ORDERS':
      return {
        ...state,
        orders: action.payload,
      };
    case 'SIGN_OUT': // обработка действия выхода из системы
      return {
        ...state,
        orders: null, // сброс значения при выходе из системы
      };
    default:
      return state;
  }
};

export const payPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PAY_PAGE':
      return {
        ...state,
        payPage: action.payload,
      };
    case 'SIGN_OUT': // обработка действия выхода из системы
      return {
        ...state,
        payPage: null, // сброс значения при выходе из системы
      };
    default:
      return state;
  }
};

export const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CARD':
      return {
        ...state,
        card: action.payload,
      };
    case 'SIGN_OUT': // обработка действия выхода из системы
      return {
        ...state,
        card: null, // сброс значения при выходе из системы
      };
    default:
      return state;
  }
};

export const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        ...state,
        isAuthenticated: true,
      };
    case 'SIGN_OUT':
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};