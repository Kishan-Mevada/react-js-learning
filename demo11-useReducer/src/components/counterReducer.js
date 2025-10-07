
const initialState = { count: 0 };

const counterReducer = (state, action) => {
     switch (action.type) {
        case '+':
            return { count: state.count + 1 };
        case '-':
            return { count: state.count - 1 };
        case 'reset':
            return { count: 0 };
        case 'incrementBy':
            return { count: state.count + action.payload };
        case 'decrementBy':
            return { count: state.count - action.payload };            
        default:
            return state;
    }
}

export { initialState, counterReducer }