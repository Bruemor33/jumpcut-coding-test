
const initialState = {
    count: 0,
    rangeGenerator: [0, 0]
};

function reducer(state = initialState, action) {
    switch(action.type) {

        // On Increment, increase state.count by 1 and grab the state of rangeGenerator
        case 'INCREMENT':
            return {
                count: state.count + 1,
                rangeGenerator: state.rangeGenerator 
            };

        // On Decrement subtract 1 from state.count and grab rangeGenerator state
        case 'DECREMENT':
            return {
                count: state.count - 1,
                rangeGenerator: state.rangeGenerator
            };

        // Implement addition of 2 and the range sequence and generator
        case 'ACCUMULATOR':
            const accumulator = () => {

                // Bring the count state in to do increment by 2 if count is greater or less than 0
                let val = state.count;
                while (val > 0 | val < 0) {
                    return val + 2
                }
                // If count is equal to 0, increment by 1 as a failsafe
                if (val == 0) {
                    return val + 1
                }
            }

            // Grabe the current state of count to pass through as an argument in the range sequence
            let start = state.count;
            const rangeSeq = (n, start, step) => {

                /* 
                 * n + step will allow for the correct accumulation increment when passing  
                 * the step int within the generator
                 */
                const value = start + (n + step);
                return value
            }

            // Set up the generator to handle a sequencer with a start and step as arguments
            const generator = (funcSeq, start, step) => {
                let n = 0;
                const iterator = {};
                iterator.next = () => {
                    const value = funcSeq(n, start, step);
                    n += step;

                    // Marry the value from iterator.next to the state of the generator
                    state.rangeGenerator = value;
                    return value
                }
                return iterator
            }

            // Pass the range sequencer, current state of count, and your step iteration as arguments
            const rangeGen = generator(rangeSeq, start, 2);

            // Rough compilation of the generator being ran 4 times :: Refactor this later
            const values = [
                rangeGen.next(),
                rangeGen.next(),
                rangeGen.next(),
                rangeGen.next()
            ]

            // Set the accumulator increment by 2 function equal to gen to be returned as count's state
            const gen = accumulator();
            return {
                count: gen,

                // Use join(', ') to format the returned values properly for the end user
                rangeGenerator: values.join(', ')
            }
        default: 
            return state;
    }
}

export default reducer;