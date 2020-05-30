import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Sheet extends Component {
    renderStats = () => {
	var stats = ["Health", "Energy","Memory","Inventory","Experience","Level"]

	return stats.map((stat,i)=> {
	    return (
		<div key={i} className="stat">
		    <div className="title">
			{stat}
		    </div>
		    <div className="value">
			10/10
		    </div>
		</div>
	    )
	})
    }
    render() {
	return (
	    <div className="main-wrapper">	    
		<article className="character-sheet">
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
			<div className="inventory">
			    <div className="title">
				Abilities
			    </div>
			</div>
			<div className="inventory">
			    <div className="title">
				Spells
			    </div>
			</div>
		    </div>
		    <div className="col-2">
			<div className="inventory">
			    <div className="title">
				Magic Items
			    </div>
			</div>
			<div className="inventory">
			    <div className="title">
				Equipment
			    </div>
			</div>
		    </div>
		    <div className="clearfix"/>

		    <hr/>
		    <div className="col-1">
			<div className="inventory">
			    <div className="title">
				Appearance
			    </div>
			    <textarea placeholder="Distinctive features, outfit, quirks, manner of speaking."/>
			</div>
			<div className="inventory">
			    <div className="title">
				Personality
			    </div>
			    <textarea placeholder="Ideals, opinions, fears, weakness they need to overcome."/>
			</div>
		    </div>
		    <div className="col-2">
			<div className="inventory">
			    <div className="title">
				Ambitions
			    </div>
			    <textarea placeholder="What do they want from life? What is their current goal?"/>
			</div>
			<div className="inventory">
			    <div className="title">
				Backstory
			    </div>
			    <textarea placeholder="Significant events that shaped them. Their deep dark secret."/>
			</div>
		    </div>
		    <div className="clearfix"/>		    
		</article>
	    </div>
	)
    }
}

export default Sheet
