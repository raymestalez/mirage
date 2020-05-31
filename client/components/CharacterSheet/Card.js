import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Card extends Component {
    render() {
	const { item } = this.props
	return (
	    <div className="card">
		<div className="title">
		    <FontAwesomeIcon icon={["fas", "trash-alt"]}/>
		    {item.title}
		    <div className="level">{item.level}</div>
		</div>
		<hr/>
		<div className="description">{item.description}</div>
	    </div>
	)
    }
}

export default connect(({})=>({}), {})(Card)




