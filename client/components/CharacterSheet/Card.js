import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/* Actions */
import { updateSheet, removeCard, } from '../../actions/sheetActions'
import { toggleModal } from '../../actions/utils'


class Card extends Component {
    appendCard = () => {
	const {item, sheets, updateSheet, toggleModal} = this.props
	toggleModal()
	var type
	switch (item.type) {
	    case 'Ability': type = 'abilities'; break;
	    case 'Spell': type = 'spells'; break;
	    case 'Magic Item': type = 'magicItems'; break;
	    case 'Item': type = 'equipment'; break;
	}
	var randomId = Math.random().toString(36).substring(7)
	item.id = randomId // so I can remove  them later by id

	var newSheet = {...sheets[0]}
	//console.log(newSheet)
	/* You can have multiple items, but not abilities/spells*/
	if (item.type == 'Ability' || item.type == 'Spell') {
	    var cardAlreadyExists = newSheet[type].find(c => c.title == item.title)
	    if (cardAlreadyExists) return;
	}
	newSheet[type] = [...newSheet[type], item]
	//console.log(newSheet[type])
	updateSheet(newSheet)
    }

    removeCard = () => {
	const {item, sheets, updateSheet} = this.props
	var type
	switch (item.type) {
	    case 'Ability': type = 'abilities'; break;
	    case 'Spell': type = 'spells'; break;
	    case 'Magic Item': type = 'magicItems'; break;
	    case 'Item': type = 'equipment'; break;
	}
	var newSheet = {...sheets[0]}
	newSheet[type] = newSheet[type].filter(c=> c.id != item.id)
	updateSheet(newSheet)
    }

    render() {
	const { item, creating, removeCard, toggleModal } = this.props
	/* Creating is true when the card is rendered into card creation modal,
	   it's false when it's renderd into character sheet (show trash icon)*/
	return (
	    <div className="card">
		<div className="title">
		    {creating ?
		     <FontAwesomeIcon icon={["fas", "plus-circle"]}
				      onClick={this.appendCard}/>
		    :
		     <FontAwesomeIcon icon={["fas", "trash-alt"]}
				      onClick={this.removeCard}/>
		    }
		    {item.title}
		    <div className="level">{item.level}</div>
		</div>
		<hr/>
		<div className="description">{item.description}</div>
	    </div>
	)
    }
}

export default connect(({sheets})=>({sheets}), {updateSheet, removeCard, toggleModal})(Card)




