var INITIAL_STATE = {
    showModal: "",
    addingCardOfType: "Spell"
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
	case 'TOGGLE_MODAL':
	    const modal = action.payload
	    /* If this modal is already open I toggle it off. */
	    const alreadyOpen = state.showModal === modal 
	    return {...state, showModal: alreadyOpen ? false : modal }
	case 'FILTER_BY_TYPE':
	    const cardType = action.payload
	    return {...state, addingCardOfType: cardType }
	default:
	    return state
    }
}
