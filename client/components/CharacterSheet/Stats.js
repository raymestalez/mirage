import React, { Component } from 'react'
import { connect } from 'react-redux'



class Stats extends Component {
    render() {
	var sheet = this.props.sheets[0]
	return (
	    <div>
		<div className="col-1">
		    <div className="stats">

			<div className="stat">
			    <div className="title">
				Health
			    </div>
			    <div className="inputs-wrapper">
				<input type="text"
				       className="value"
				       defaultValue={sheet.currentHealth} />
				/
				<input type="text"
				       className="value"
				       defaultValue={sheet.maxHealth} />
			    </div>
			</div>

			<div className="stat">
			    <div className="title">
				Energy
			    </div>
			    <div className="inputs-wrapper">
				<input type="text"
				       className="value"
				       defaultValue={sheet.currentEnergy} />
				/
				<input type="text"
				       className="value"
				       defaultValue={sheet.maxEnergy} />
			    </div>
			</div>

			<div className="stat">
			    <div className="title">
				Memory
			    </div>
			    <input type="text"
				   className="value"
				   defaultValue={sheet.memorySize} />
			</div>
			

		    </div>
		</div>
		<div className="col-1">
		    <div className="stats">

			<div className="stat">
			    <div className="title">
				Inventory
			    </div>
			    <input type="text"
				   className="value"
				   defaultValue={sheet.inventorySize} />
			</div>


			<div className="stat">
			    <div className="title">
				Experience
			    </div>
			    <input type="text"
				   className="value"
				   defaultValue={sheet.experience} />
			</div>

			<div className="stat">
			    <div className="title">
				Level
			    </div>
			    <input type="text"
				   className="value"
				   defaultValue={sheet.level} />
			</div>

		    </div>
		</div>
	    </div>
	)
    }
}

export default connect(({sheets})=>({sheets}), {})(Stats)
