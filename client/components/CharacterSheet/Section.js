import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import spells from '../../data/spells.json'

import Card from './Card'

/* Actions */
import { toggleModal, filterByType } from '../../actions/utils'

class Section extends Component {
    renderCards = () => {
	var cardsOfThisType = this.props.sheet.cards.filter((c)=>{
	    /* Cards have types called "Ability", "Spell", etc,
	       identical to the singular name of the section */
	    return c.type == this.props.singular
	})
	return cardsOfThisType.map((spell,i)=> {
	    return (
		<Card item={spell} key={i} />
	    )
	})
    }
    
    render() {
	return (
	    <div className="section">
		<div className="section-title">
		    {this.props.title}
		</div>


		<div className="cards">
		    {this.renderCards().splice(0,2)}	
		</div>
		
		<div className="card append"
		     onClick={() => {
			 this.props.toggleModal("cards")
			 /* Set a variable in utils reducer,
			    cards modal will use it to only show the cards
			    of type I want to append to this section */
			 this.props.filterByType(this.props.singular)
		     }}>
		    Add {this.props.singular}
		    <FontAwesomeIcon icon={["fas", "plus-circle"]}/>
		</div>
	    </div>
	)
    }
}

export default connect(({sheet})=>({sheet}), {toggleModal, filterByType})(Section)
