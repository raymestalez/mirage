import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import spells from '../../../json/spells.json'
import abilities from '../../../json/abilities.json'
import magicItems from '../../../json/magic-items.json'
import equipment from '../../../json/equipment.json'

import Card from './Card'
import Modal from '../Elements/Modal'
import Cards from './Cards'

/* Actions */
import { toggleModal } from '../../actions/utils'

class Section extends Component {
    renderCards = () => {
	var type
	switch (this.props.type) {
	    case 'Ability': type = 'abilities'; break;
	    case 'Spell': type = 'spells'; break;
	    case 'Magic Item': type = 'magicItems'; break;
	    case 'Item': type = 'equipment'; break;
	}
	var cards = this.props.sheets[0][type]
	if (cards.length == 0) return;
	return cards.map((card,i)=> {
	    return (
		<Card item={card} key={i} />
	    )
	})
    }
    
    render() {
	var cards
	switch (this.props.type) {
	    case 'Spell': cards = spells; break;
	    case 'Ability': cards = abilities; break;
	    case 'Magic Item': cards = magicItems; break;
	    case 'Item': cards = equipment; break;
	}
	var sheet = this.props.sheets[0]
	var numberOfItems
	var canAddMore
	if (this.props.type == 'Spell' ||this.props.type == 'Ability') {
	    numberOfItems = sheet.spells.length + sheet.abilities.length
	    canAddMore = numberOfItems < sheet.memorySize
	    //console.log(numberOfItems,sheet.memorySize)
	} else {
	    numberOfItems = sheet.magicItems.length + sheet.equipment.length
	    canAddMore = numberOfItems < sheet.inventorySize
	}

	return (
	    <div className="section">
		<div className="section-title">
		    {this.props.title}
		</div>


		<div className="cards">
		    {this.renderCards()}	
		</div>
		{canAddMore &&
		<div className="card append"
		     onClick={() => {
			 this.props.toggleModal(this.props.type+"-cards")
		     }}>
		    Add {this.props.type}
		    <FontAwesomeIcon icon={["fas", "plus-circle"]}/>
		</div>}
		<Modal name={this.props.type+"-cards"} className="cards-modal wide">
		    <Cards cards={cards} />
		</Modal>
	    </div>
	)
    }
}

export default connect(({sheets})=>({sheets}), {toggleModal})(Section)
