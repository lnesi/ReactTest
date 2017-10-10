import { createStore } from 'redux';

 const reducer=function(state={},action){
  switch (action.type) {
  	case 'SET_GRID':state=action.payload;
    default: return state;
  }
  return state;
}

let store=createStore(reducer,{"rows":10,"columns":10,"start":Math.round(Math.random()*10),"end":Math.round(Math.random()*10)},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store