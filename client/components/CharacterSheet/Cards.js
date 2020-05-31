import React, { Component } from 'react'
import { connect } from 'react-redux'

import spells from '../../data/spells.json'
import abilities from '../../data/abilities.json'
import Card from './Card'

class Cards extends Component {
    componentDidMount(){}

    componentDidUpdate(prevProps, prevState){}

    renderCategories = () => {
	/* I click on add item in ../Section, it opens this modal,
	   and sets addingCardOfType variable in utils reducer according to
	   the section's type (Spell, Ability, etc). Here I show only
	   the cards that could be added to that section.*/
	var cards
	switch (this.props.utils.addingCardOfType) {
	    case 'Spell':
		cards = spells
		break;
	    case 'Ability':
		cards = abilities
		break;
	}
	
	return cards.map((category,i)=> {
	    return (
		<div key={i}>
		    <b>{category.title}</b>
		    <div className="cards columns">
			{this.renderCards(category.spells)}
		    </div>
		</div>
	    )
	})
    }

    renderCards = (cards) => {
	return cards.map((spell,i)=> {
	    return (
		<Card item={spell} key={i} creating/>
	    )
	})
    }

    render() {
	//console.log("Render Cards")
	return this.renderCategories()
    }
}

export default connect(({utils})=>({utils}), {})(Cards)



