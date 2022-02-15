import { createStore } from 'redux';

// create reducers
const rootReducer = (state = { count: 0 }, action) => {
    const mainType = action.type.split('/')[0];
    switch (mainType) {
        case 'counter':
            return counterReducer(state, action);
        default:
            return state;
    }
}

const counterReducer = (state = { count: 0 }, action) => {
    if (action.type === 'counter/increment') {
        const newState = {
            count: state.count + action.value
        };
        return newState;
    } else if (action.type === 'counter/decrement') {
        const newState = {
            count: state.count - action.value
        };
        return newState;
    } else if (action.type === 'counter/reset') {
        const newState = {
            count: state.count = 0
        };
        return newState;
    } else {
        return state;
    }
}

// create a store
const store = createStore(rootReducer);

export default store;

export const increment = (value = 1) => {
    store.dispatch({ type: 'counter/increment', value: value });
}

export const decrement = (value = 1) => {
    store.dispatch({ type: 'counter/decrement', value: value });
}

export const reset = () => {
    store.dispatch({ type: 'counter/reset' });
}