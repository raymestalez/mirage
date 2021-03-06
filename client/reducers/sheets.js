import blankSheet from '../../json/sheet-blank.json'

var INITIAL_STATE = [
    {
	name:"",
	image:"",
	currentHealth: 10,
	maxHealth:10,
	currentEnergy: 10,
	maxEnergy: 10,
	memorySize: 10,
	inventorySize:10,
	experience: 0,
	level: 1,
	cards:[],
	abilities: [],
	spells: [],
	magicItems: [],
	equipment: [],
	id: "12",
	appearance: "",
	ambitions: "",
	personality: "",
	backstory: ""
    }
]

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
	case 'LOAD_SHEET':
	    /* I'm always editing the first sheet in the array.
	       To "load" a sheet I just put it into the first place */
	    /* Used when I select a sheet in the dropdown */
	    var sheet = action.payload
	    var removed = state.filter((s)=> s.id != sheet.id)
	    return [sheet, ...removed]
	case 'LOAD_SHEETS':
	    /* Sheet.js moutns and passes me sheets from localStorage */
	    var sheets = action.payload
	    return sheets
	case 'CREATE_SHEET':
	    /* Subnav create button passes me a sheet template,
	       I add it at the front */
	    var sheet = action.payload
	    var updatedSheets = [sheet, ...state]
	    localStorage.setItem('sheets', JSON.stringify(updatedSheets));
	    return updatedSheets
	case 'UPDATE_SHEET':
	    /* When I edit a sheet, I'm getting an updated version,
	       I remove the old one from the state, and put the updated one
	       in front */
	    var sheet = action.payload
	    var removed = state.filter((s)=> s.id != sheet.id)
	    var updatedSheets = [sheet, ...removed]
	    localStorage.setItem('sheets', JSON.stringify(updatedSheets));
	    return updatedSheets
	case 'DELETE_SHEET':
	    /* To delete a shit I simply filter it out */
	    var sheet = action.payload
	    var updatedSheets = state.filter((s)=> s.id != sheet.id)
	    if (updatedSheets.length == 0) updatedSheets.push(blankSheet)
	    localStorage.setItem('sheets', JSON.stringify(updatedSheets))
	    return updatedSheets
	default:
	    return state
    }
}
