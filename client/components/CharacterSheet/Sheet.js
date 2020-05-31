import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import CardsModal from './CardsModal'
import Card from './Card'
import Stats from './Stats'
import Section from './Section'
import Description from './Description'



/* Actions */
import { toggleModal } from '../../actions/utils'

class Sheet extends Component {
    render() {
	return (
	    <div className="main-wrapper">	    
		<article className="character-sheet">
		    <input type="text"
			   className="character-name"
			   placeholder="Character's Name" />
		    <div className="clearfix"/>		    
		    <Stats/>
		    <div className="col-1">
			<Section title="Abilities" singular="Ability"/>
			<Section title="Spells" singular="Spell"/>
		    </div>
		    <div className="col-2">
			<Section title="Magic Items" singular="Magic Item"/>
			<Section title="Equipment" singular="Item"/>
		    </div>

		    <div className="clearfix"/>

		    <hr/>
		    <div className="col-1">
			<Description type={0}/>
			<Description type={2}/>
		    </div>
		    <div className="col-2">
			<Description type={1}/>

			<Description type={3}/>			
		    </div>
		    <div className="clearfix"/>		    
		</article>
		<CardsModal/>
	    </div>
	)
    }
}

export default connect(({ sheet }) => ({ sheet }), { toggleModal })(Sheet)
