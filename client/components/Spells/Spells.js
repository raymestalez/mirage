import React, { Component } from 'react'


import spells from '../../data/spells.json'

class Spells extends Component {
    componentDidMount(){}

    componentDidUpdate(prevProps, prevState){}

    renderCards = () => {
	return spells.map((spell,i)=> {
	    return (
		<div className="spell" key={i}>
		    <div className="title">{spell.title}</div>
		    <hr/>
		    <div className="description">{spell.description}</div>
		</div>

	    )
	})
    }

    render() {
	console.log("Render Spells")
	return (
	    <>
		<div className="subnav">
		    <div className="main-wrapper">
			{/* <div className="btn">Spells</div> */}
		    </div>
		</div>

		<div className="main-wrapper spells">
		    {this.renderCards()}
		</div>
	    </>
	)
    }
}

export default Spells

