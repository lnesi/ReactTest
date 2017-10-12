import { createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger';


const initialState={
  loading:false,
  base:'',
  date:'',
  rates:[],
  error:null
}
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_RATES_START':{
      return {...state,loading:true,error:null,rates:[],base:'',date:''}
    }
    case 'FETCH_RATES_OK':{
      return {...state,loading:false,rates:action.payload.rates,date:action.payload.date,base:action.payload.base}
    }
    case 'FETCH_RATES_ERROR':{
      return {...state,loading:false,error:action.payload}
    }
    default:
      return state
  }
}

const store = createStore(reducer, applyMiddleware(thunk,logger));


export default store;
