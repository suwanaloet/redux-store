import { createStore } from 'redux';
import reducer from './reducers'
// GUIDE HERE https://redux.js.org/tutorials/fundamentals/part-4-store
// see "Creating a Store"
//import reducers from file we already made, in this case the reducers.js in utils

/* FOR REFERENCE 
function createStore(reducer, preloadedState) {
  let state = preloadedState
  const listeners = []

  function getState() {
    return state
  }

  function subscribe(listener) {
    listeners.push(listener)
    return function unsubscribe() {
      const index = listeners.indexOf(listener)
      listeners.splice(index, 1)
    }
  }

  function dispatch(action) {
    state = reducer(state, action)
    listeners.forEach(listener => listener())
  }

  dispatch({ type: '@@redux/INIT' })

  return { dispatch, subscribe, getState }
}
*/

const store = createStore(reducer);
export default store;

