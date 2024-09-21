
import { configureStore } from '@reduxjs/toolkit';

import counterSlice from './counter';
import privacySlice from './privacy'; 

const counterStore=configureStore({reducer:{
  counter:counterSlice.reducer,
  privacy:privacySlice.reducer
}});

export default counterStore;



// import {createStore} from 'redux';
// const INITIAL_VALUE={
//   counter:0,
//   primary:false
// }
// const counterReducer=(store=INITIAL_VALUE, action)=>{
//   let newStore=store;
  
//   if(action.type==="INCREMENT"){
//    newStore={counter:store.counter+1}
   
//   }
//   else if(action.type==="DECREMENT"){
//     newStore={...store, counter:store.counter-1}
//   }
//   else if(action.type==="ADD"){
//     newStore={...store, counter:store.counter+Number(action.payload.num)}
//   }
//   else if(action.type==="SUBTRACT"){
//     newStore={...store, counter:store.counter- Number(action.payload.num)}
//   }
//   else if(action.type==="STOP"){
//     newStore={...store, counter:store.counter-store.counter}
//   }
//   else if(action.type==="TOGGLE"){
//     newStore={...store, primary:!store.primary}
    
//   }
  
//   return newStore;
// }
// const counterStore=createStore(counterReducer);
// export default counterStore;