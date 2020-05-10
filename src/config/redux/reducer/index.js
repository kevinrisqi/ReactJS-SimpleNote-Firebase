const initialState = {
    popup: false,
    isLogin: false,
    user: 'Kevin'
  }
  
  const reducer = (state = initialState, action) => {
    if (action.type === 'CHANGE_POPUP') {
      return {
        ...state,
        popup: action.value
      }
    }
  
    if (action.type === 'CHANGE_USER') {
      return {
        ...state,
        user: action.value
      }
    }
    return state;
  }

  export default reducer;