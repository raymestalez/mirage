import React, { Component } from 'react'
import { connect } from 'react-redux'

/* Actions */
import { updateSheet } from '../../actions/sheetActions'


class Stats extends Component {
    update = (value, key)=> {
	var sheet = this.props.sheets[0]
	sheet = {...sheet}
	sheet[key] = value
	this.props.updateSheet(sheet)
    }
    render() {
	var sheet = this.props.sheets[0]
	var memoryCount = sheet.abilities.length + sheet.spells.length
	var itemCount = sheet.magicItems.length + sheet.equipment.length
	//console.log(sheet)
	return (
	    <div className="stats">
		<div className="stat">
		    <div className="title">
			Health
		    </div>
		    <div className="inputs-wrapper">
			<input type="number"
			       className="value"
			       value={sheet.currentHealth}
			       onChange={(e)=>
				   this.update(e.target.value,
					       "currentHealth")}/>
			/
			<input type="number"
			       className="value"
			       value={sheet.maxHealth}
			       onChange={(e)=>
				   this.update(e.target.value,
					       "maxHealth")}/>
		    </div>
		</div>

		<div className="stat">
		    <div className="title">
			Energy
		    </div>
		    <div className="inputs-wrapper">
			<input type="number"
			       className="value"
			       value={sheet.currentEnergy}
			       onChange={(e)=>
				   this.update(e.target.value,
					       "currentEnergy")}/>
			/
			<input type="number"
			       className="value"
			       value={sheet.maxEnergy}
			       onChange={(e)=>
				   this.update(e.target.value,
					       "maxEnergy")}/>
		    </div>
		</div>
		
		<div className="stat">
		    <div className="title">
			Experience
		    </div>
		    <input type="number"
			   className="value"
			   value={sheet.experience}
			   onChange={(e)=>
			       this.update(e.target.value,
					   "experience")}/>
		</div>

		<div className="stat">
		    <div className="title">
			Level
		    </div>
		    <input type="number"
			   className="value"
			   value={sheet.level}
			   onChange={(e)=>
			       this.update(e.target.value,
					   "level")}/>
		</div>

	    </div>
	)
    }
}

export default connect(({sheets})=>({sheets}), { updateSheet })(Stats)
