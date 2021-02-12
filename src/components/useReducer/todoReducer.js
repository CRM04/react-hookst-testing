export const todoReducer = (state = [], { type, payload }) => {
    switch (type) {
        case 'add':
            return [...state, payload];
        case 'remove':
            return state.filter(({ id }) => id !== payload.id);
        case 'toogle':
            return state.map(todo => (todo.id === payload ? { ...todo, done: !todo.done } : todo));
        default:
            return state;
    }
}