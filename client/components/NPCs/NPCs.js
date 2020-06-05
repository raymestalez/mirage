import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TextareaAutosize from 'react-textarea-autosize'

import Card from '../CharacterSheet/Card'

import spells from '../../../json/spells.json'

class NPCs extends Component {
    render() {
	console.log(spells[0])
	return (
	    <div className="columns">
		<div className="npc">
		    <h1>Jafar</h1>
		    <div className="add-image"
			 onClick={()=>this.setState({
			     adding: true
			 })}>
			Add Image
			<FontAwesomeIcon className="icon"
					 icon={["fas", "plus-circle"]}/>
		    </div>
		    
		    <TextareaAutosize defaultValue="King’s Evil Vizier. Cunning and ambitious."/>
		    <div className="sheet">
			<div className="stats">
			    <div className="stat">
				<div className="title">Health</div>
				<input type="number"
				       className="value"
				       value={10}
				       onChange={(e)=>{}}/>
			    </div>
			    <div className="stat">
				<div className="title">Energy</div>
				<input type="number"
				       className="value"
				       value={10}
				       onChange={(e)=>{}}/>
			    </div>
			</div>
			<div className="cards">
			    <Card item={spells[0].spells[0]}/>
			    <Card item={spells[1].spells[0]}/>
			    <Card item={spells[2].spells[0]}/>
			</div>
			<div className="card append"
			     onClick={() => {}}>
			    Add Ability/Spell/Item
			    <FontAwesomeIcon icon={["fas", "plus-circle"]}/>
			</div>
		    </div>
		</div>
	    </div>

	)
    }
}

export default connect(({})=>({}), {})(NPCs)
