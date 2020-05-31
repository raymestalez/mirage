import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/* Actions */
import { toggleModal } from '../../actions/utils'

class Modal extends Component {
    render() {
	const { children, utils, name } = this.props
	/* Show this modal if it's name matches name of the modal I want to show */
	const showModal = utils.showModal === name
	if (!showModal) return null
	return (
	    <div className="modal-wrapper">
		<div className={"modal-card " + this.props.className}>
		    <div className="close-button"
			 onClick={() => this.props.toggleModal(name)}>
			<FontAwesomeIcon icon={["fas", "times"]}/>  
		    </div>
		    <div>{children}</div>
		</div>
		<div className="modal-bg"
		     onClick={() => this.props.toggleModal(name)}></div>
	    </div>
	)
    }
}

export default connect(({ utils }) => ({ utils }), { toggleModal })(Modal)
