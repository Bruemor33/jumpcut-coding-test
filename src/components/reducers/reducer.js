
const initialState = {
    count: 0,
    rangeGenerator: [0, 0]
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1,
                rangeGenerator: state.rangeGenerator 
            };
        case 'DECREMENT':
            return {
                count: state.count - 1,
                rangeGenerator: state.rangeGenerator
            };
        case 'ACCUMULATOR':
            const accumulator = () => {
                let val = state.count;
                while (val > 0 | val < 0) {
                    return val + 2
                }
                if (val == 0) {
                    return val + 1
                }
            }
            let start = state.count;
            const rangeSeq = (n, start, step) => {
                const value = start + (n * step);
                return value
            }
            const genorator = (funcSeq, start, step) => {
                let n = 0;
                const iterator = {};
                iterator.next = () => {
                    const value = funcSeq(n, start, step);
                    n += step;
                    state.rangeGenerator = value;
                    return value
                }
                return iterator
            }
            const rangeGen = genorator(rangeSeq, start, 1);
            const values = [
                rangeGen.next(),
                rangeGen.next(),
                rangeGen.next(),
                rangeGen.next()
            ]

            const gen = accumulator();
            return {
                count: gen,
                rangeGenerator: values.join(', ')
            }
        default: 
            return state;
    }
}

export default reducer;