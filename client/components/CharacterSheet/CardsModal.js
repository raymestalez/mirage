import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Modal from '../Elements/Modal'
import Cards from './Cards'

class CardsModal extends Component {
    render() {
	return (
	    <Modal name="cards" className="wide">
		<Cards/>
	    </Modal>
	)
    }
}

export default connect(({ cards }) => ({ cards }), { })(CardsModal)
