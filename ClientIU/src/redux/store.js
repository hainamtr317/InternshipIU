// import { configureStore } from '@reduxjs/toolkit'

import rootReducer from './reducer'
import {createStore} from 'redux'

// const store = configureStore({reducer: rootReducer});

// console.log(store.getState())

// export default store
const store = createStore(rootReducer);
export default store;