import React, { Component } from 'react'


import spells from '../../data/spells.json'
import Card from './Card'

class Cards extends Component {
    componentDidMount(){}

    componentDidUpdate(prevProps, prevState){}

    renderCards = () => {
	return spells.map((spell,i)=> {
	    return (
		<Card item={spell} key={i} />
	    )
	})
    }

    render() {
	console.log("Render Cards")
	return (
	    <div className="cards columns">
		{this.renderCards()}
	    </div>
	)
    }
}

export default Cards

