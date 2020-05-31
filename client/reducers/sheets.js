var INITIAL_STATE = [
    {
	name:"",
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
		value: 10
	    },
	    {
		title: "Inventory",
		value: 10
	    },
	    {
		title: "Experience",
		value: 0
	    },
	    
	    {
		title: "Level",
		value: 1
	    }
	],
	cards:[],
	id: "12",
	appearance: "",
	ambitions: "",
	personality: "",
	backstory: ""
    }
]

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
	case 'LOAD_SHEETS':
	    var sheets = action.payload
	    return sheets
	case 'CREATE_SHEET':
	    var sheet = action.payload
	    /* Just in case, check if it already exists and remove it */
	    var removed = state.filter((s)=> s.id != sheet.id)
	    var updatedSheets = [sheet, ...removed]
	    localStorage.setItem('sheets', JSON.stringify(updatedSheets));
	    return updatedSheets
	case 'UPDATE_SHEET':
	    var sheet = action.payload
	    /* Find sheet in state, remove it, replace it */
	    var removed = state.filter((s)=> s.id != sheet.id)
	    var updatedSheets = [sheet, ...removed]
	    localStorage.setItem('sheets', JSON.stringify(updatedSheets));
	    return updatedSheets
	case 'DELETE_SHEET':
	    var sheet = action.payload
	    var updatedSheets = state.filter((s)=> s.id != sheet.id)
	    localStorage.setItem('sheets', JSON.stringify(updatedSheets));
	    return updatedSheets
	default:
	    return state
    }
}
