import React, { Component } from 'react'
import { connect } from 'react-redux'

import Card from './Card'

class Cards extends Component {
    componentDidMount(){}

    componentDidUpdate(prevProps, prevState){}

    renderCategories = () => {
	/* Cards are passed to it by the appropriate section */
	return this.props.cards.map((category,i)=> {
	    return (
		<div key={i}>
		    <div className="category-title">{category.title}</div>
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
	return (
	    <div className="">
		{this.renderCategories()}
	    </div>
	)
    }
}

export default connect(({utils})=>({utils}), {})(Cards)



