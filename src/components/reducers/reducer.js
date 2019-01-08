
const initialState = {
    count: 0
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                count: state.count - 1
            };
        case 'ACCUMULATOR':
            const accumulator = () => {
                let val = state.count;
                while (val > 0 | val < 0) {
                    return val + val
                }
                if (val == 0) {
                    return val + 1
                }
            }
            const gen = accumulator();
            return {
                count: gen
            }
        default: 
            return state;
    }
}

export default reducer;