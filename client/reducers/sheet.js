var INITIAL_STATE = {
    stats: [
	{
	    title: "Health",
	    value: "10/10"
	},
	{
	    title: "Energy",
	    value: "10/10"
	},
	{
	    title: "Memory",
	    value: "10"
	},
	{
	    title: "Inventory",
	    value: "10"
	},
	{
	    title: "Experience",
	    value: "0"
	},
	
	{
	    title: "Level",
	    value: "1"
	}
    ],
    abilities: [],
    spells: [],
    magicItems: [],
    equipment: [],
    appearance: "",
    ambitions: "",
    personality: "",
    backstory: ""
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
	case 'TOGGLE_MODAL':
	    const modal = action.payload
	    /* If this modal is already open I toggle it off. */
	    const alreadyOpen = state.showModal === modal 
	    return {...state, showModal: alreadyOpen ? false : modal }
	default:
	    return state
    }
}
