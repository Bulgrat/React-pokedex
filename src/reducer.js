export function pkmReducer(state, action) {
    switch (action.type) {
        case 'ADD_POKE':
            if (state.length >= 6) return state;
            return [...state, action.payload.pokemon];
        case 'REMOVE_POKE':
            state = [];
            return state;
        default:
            return state;
    }
}