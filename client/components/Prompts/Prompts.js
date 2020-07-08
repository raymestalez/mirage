import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import promptCategories from '../../../json/prompts/prompts.json'

class Prompts extends Component {
    state = {
	seeds: Array.from({length: promptCategories.length+1}, () => Math.random())
    }
    
    renderPrompts = () => {
	/* Make a list of all prompts combined */
	var allPrompts = []
	promptCategories.map((c)=>{
	    if (c.type != "Complications") {
		allPrompts = allPrompts.concat(c.prompts)
	    }
	})
	/* Add a category containing all prompts at the beginning */
	var categories = [{
	    type: "All Challenge Types (use to generate the main adventure goal)",
	    prompts: allPrompts,
	},...promptCategories]
	
	return categories.map((c,i)=>{
	    var prompt = c.prompts[
		Math.floor(this.state.seeds[i]*c.prompts.length)
	    ]
	    return (
		<div className="prompt" key={i}>
		    <div className="refresh"
			 onClick={()=> {
			     var seeds = [...this.state.seeds]
			     seeds[i] = Math.random()
			     this.setState({seeds})
			 }}>
			<FontAwesomeIcon icon={["fas", "dice"]}/>
		    </div>
		    <span className="label">{c.type}:</span>    
		    <div className="clearfix"/>
		    <div className="text">
			{prompt}
		    </div>
		</div>
	    )
	})
    }
    render() {
	return (
	    <div className="main-wrapper">
		<div className="prompts">
		    <h1>Story Generator</h1>
		    {this.renderPrompts()}
		</div>
	    </div>
	)
    }
}

export default Prompts


