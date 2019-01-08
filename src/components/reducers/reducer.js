
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
            function accumulator() {
                let val = state.count;
                while (val > 0 | val < 0) {
                    return val + val
                }
                if (val == 0) {
                    return val + 1
                }
            }
            var gen = accumulator();
            function rangeSeq(start, step) {
                if (start === step) return [start];
                return [start, ...rangeSeq(start + 1, step)];
            }
            return {
                count: gen
            }
        default: 
            return state;
    }
}

export default reducer;