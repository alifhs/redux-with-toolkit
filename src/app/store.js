import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

const x = ()=> {
    console.log('got called');
    return {}; //returning state
}

export default configureStore({
  reducer: {
    counter: counterReducer,
    x: x
    
  },
})