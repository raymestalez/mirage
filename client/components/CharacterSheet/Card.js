import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/* Actions */
import { appendCard, removeCard } from '../../actions/sheetActions'
import { toggleModal } from '../../actions/utils'
class Card extends Component {
    render() {
	const { item, creating, appendCard, removeCard, toggleModal } = this.props
	/* Creating is true when the card is rendered into card creation modal,
	   it's false when it's renderd into character sheet (show trash icon)*/
	return (
	    <div className="card">
		<div className="title">
		    {creating ?
		     <FontAwesomeIcon icon={["fas", "plus-circle"]}
				      onClick={() => {
					  appendCard(item)
					  toggleModal()
				      }}/>
		    :
		     <FontAwesomeIcon icon={["fas", "trash-alt"]}
				      onClick={() => removeCard(item)}/>
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

export default connect(({})=>({}), {appendCard, removeCard, toggleModal})(Card)




