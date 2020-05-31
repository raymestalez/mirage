import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import TextareaAutosize from 'react-textarea-autosize';

import spells from '../../data/spells.json'

import CardsModal from './CardsModal'
import Card from './Card'

/* Actions */
import { toggleModal } from '../../actions/utils'

class Sheet extends Component {
    renderStats = () => {
	var stats = ["Health", "Energy","Memory","section","Experience","Level"]

	return this.props.sheet.stats.map((stat,i)=> {
	    return (
		<div key={i} className="stat">
		    <div className="title">
			{stat.title}
		    </div>
		    <input type="text"
			   className="value"
			   defaultValue={stat.value} />
		</div>
	    )
	})
    }

    renderCards = () => {
	return spells.map((spell,i)=> {
	    return (
		<Card item={spell} key={i} />
	    )
	})
    }

    
    render() {
	return (
	    <div className="main-wrapper">	    
		<article className="character-sheet">
		    <input type="text"
			   className="character-name"
			   placeholder="Character's Name" />
		    <div className="clearfix"/>		    
		    <div className="col-1">
			<div className="stats">
			    {this.renderStats().splice(0,3)}
			</div>
		    </div>
		    <div className="col-1">
			<div className="stats">
			    {this.renderStats().splice(3,6)}
			</div>
		    </div>

		    <div className="col-1">
			<div className="section">
			    <div className="section-title">
				Abilities
			    </div>
			    <div className="card append"
			    	 onClick={() => this.props.toggleModal("cards")}>
			    Add Ability
			    <FontAwesomeIcon icon={["fas", "plus-circle"]}/>
			</div>
		    </div>
		    <div className="section">
			<div className="section-title">
			    Spells
			</div>

			<div className="cards">
			    {this.renderCards().splice(0,2)}	
			</div>

			<div className="card append">
			    Add Spell
			    <FontAwesomeIcon icon={["fas", "plus-circle"]}/>
			</div>			    
		    </div>
	    </div>
	    <div className="col-2">
		<div className="section">
		    <div className="section-title">
			Magic Items
		    </div>
		</div>
		<div className="section">
		    <div className="section-title">
			Equipment
		    </div>
		</div>
	    </div>
	    <div className="clearfix"/>

	    <hr/>
	    <div className="col-1">
		<div className="section">
		    <div className="section-title">
			Appearance
		    </div>
		    <TextareaAutosize placeholder="Distinctive features, outfit, quirks, manner of speaking."/>
		</div>
		<div className="section">
		    <div className="section-title">
			Personality
		    </div>
		    <TextareaAutosize placeholder="Ideals, opinions, fears, weakness they need to overcome."/>
		</div>
	    </div>
	    <div className="col-2">
		<div className="section">
		    <div className="section-title">
			Ambitions
		    </div>
		    <TextareaAutosize placeholder="What do they want from life? What is their current goal?"/>
		</div>
		<div className="section">
		    <div className="section-title">
			Backstory
		    </div>
		    <TextareaAutosize placeholder="Significant events that shaped them. Their deep dark secret."/>
		</div>
	    </div>
	    <div className="clearfix"/>		    
		</article>
		<CardsModal/>
		</div>
	)
    }
}

export default connect(({ sheet }) => ({ sheet }), { toggleModal})(Sheet)
