var INITIAL_STATE = {
    name: "Mike",
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
    cards:[],
    id: "12",
    appearance: "",
    ambitions: "",
    personality: "",
    backstory: ""
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
	case 'LOAD_SHEET':
	    var sheet = action.payload
	    return sheet
	case 'LOAD_SHEETS':
	    var sheets = action.payload
	    return sheets[0]
	case 'CREATE_SHEET':
	    var sheet = action.payload
	    return {...sheet}
	case 'UPDATE_SHEET':
	    var sheet = action.payload
	    return {...sheet}
	case 'DELETE_SHEET':
	    return sheet
	case 'APPEND_CARD':
	    var card = action.payload
	    var cardAlreadyExists = state.cards.find((c)=> c.title == card.title)
	    if (cardAlreadyExists) return state
	    return {...state, cards: [...state.cards, card] }
	case 'REMOVE_CARD':
	    var card = action.payload
	    return {...state, cards: state.cards.filter((c, index) => {
		return c.title != card.title
	    })}
	default:
	    return state
    }
}
