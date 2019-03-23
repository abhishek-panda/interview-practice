const createStore = (reducerFn) => {
    let state;
    let listeners = [];

    const getState = () => state;
    
    const subscribe = (listener) => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter(l => l != listener);
        }
    }

    const dispatch = (action) => {
        state = reducerFn(state, action);
        listeners.forEach(listener => {
            listener()
        });
    }

    const getAllListeners = () => listeners;

    const removeAllListener = () => {
        listeners = [];
    }

    dispatch({});

    return {
        getState,
        subscribe,
        dispatch,
        getAllListeners,
        removeAllListener
    };
}

const combineReducers = (reducers) => {
    return (state = {}, action) => {
        return Object.keys(reducers).reduce((nextState, key) => {
            nextState[key] = reducers[key](state[key], action);
        }
        ,{});
    }
}