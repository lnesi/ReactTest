import axios from 'axios';

export default function fetchRates(base='usd'){
  return function(dispatch){
    dispatch({type:"FETCH_RATES_START"});
    axios.get("http://api.fixer.io/latest?base="+base).then((response)=>{
      dispatch({type:"FETCH_RATES_OK",payload:response.data});
    }).catch((error)=>{
      dispatch({type:"FETCH_RATES_ERROR",payload:error});
    });
  }
}
