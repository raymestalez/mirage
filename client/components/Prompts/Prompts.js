import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Link } from "react-router-dom"
import promptCategories from '../../../json/prompts/prompts.json'
import locations from '../../../json/prompts/locations.json'

var categories = [
    "Adventure Goal",
    "Action/Adventure",
    "Exploration",
    "Social/Intrigue",
    "Mystery/Investigation",
    "Stealth/Heist",
    "Complication",
    "Description",
    "Goal",
    "Powers",
    "Villain's Moves",            
    "High Concept"    
]

class Prompts extends Component {
    state = {
	seeds: Array.from({length: promptCategories.length}, () => Math.random()),
	locationSeed: Math.random()
    }

    renderPrompt = (type) => {
	/* Turn category type (like Action/Adventure) into an index */
	var i = categories.findIndex((t)=> t == type)
	var c = promptCategories[i]
	var prompt = c.prompts[
	    Math.floor(this.state.seeds[i]*c.prompts.length)
	]
	if (c.type == "Adventure Goal") {
	    c.type = "Heroes'/Antagonist's Goal"
	}
	return (
	    <div className="prompt">
		<div className="refresh"
		     onClick={()=> {
			 var seeds = [...this.state.seeds]
			 seeds[i] = Math.random()
			 this.setState({seeds})
		     }}>
		    <FontAwesomeIcon icon={["fas", "dice"]}/>
		</div>
		<span className="prompt-label">{c.type}:</span>    
		<div className="clearfix"/>
		<div className="text">
		    {prompt}
		</div>
	    </div>
	)
    }
    renderLocation = () => {
	var location = locations[
	    Math.floor(this.state.locationSeed*locations.length)
	]
	return (
	    <div className="prompt image-prompt">
		<div className="refresh"
		     onClick={()=> {
			 this.setState({locationSeed:Math.random()})
		     }}>
		    <FontAwesomeIcon icon={["fas", "dice"]}/>
		</div>
		<span className="prompt-label">
		    {location.title}
		</span>
		<div className="clearfix"/>
		<img src={location.url}/>
	    </div>
	)
    }
    
    render() {
	return (
	    <div className="main-wrapper">
		<div className="prompts">
		    <h1>Adventure Prompts</h1>
		    <h3>Story Idea</h3>
		    {this.renderPrompt("High Concept")}
		    <Link className="small" to="/prompts/high-concept-ideas">
			[Full list of High Concept Ideas]</Link>
		    <div className="clearfix"/>
		    {this.renderPrompt("Adventure Goal")}
		    <Link className="small" to="/prompts/goals">
			[Full list of Goals]</Link>
		    <div className="clearfix"/>
		    {this.renderPrompt("Complication")}
		    <Link className="small" to="/prompts/complications">
			[Full list of Complications]</Link>
		    <div className="clearfix"/>
		    {/* <h3>Antagonist</h3> */}
		    {/* {this.renderPrompt("Description")} */}
		    {/* {this.renderPrompt("Goal")} */}
		    {/* {this.renderPrompt("Powers")} */}
		    <h3>Setting</h3>
		    {this.renderLocation()}
		    <Link className="small" to="/world">
			[Full list of Settings]</Link>
		    <div className="clearfix"/>
		    <h3>Challenges</h3>
		    {this.renderPrompt("Action/Adventure")}
		    {this.renderPrompt("Exploration")}
		    {this.renderPrompt("Social/Intrigue")}
		    {this.renderPrompt("Mystery/Investigation")}
		    {this.renderPrompt("Stealth/Heist")}
		    <Link className="small" to="/prompts/challenges">
			[Full list of Challenges]</Link>
		    <div className="clearfix"/>
		    {this.renderPrompt("Villain's Moves")}
		    <Link className="small" to="/prompts/villain-moves">
			[Full list of Villain's Moves]</Link>
		    <div className="clearfix"/>
		    <h3>Useful Resources</h3>
		    <ul>
			<li>
			    Use <a href="https://docs.google.com/document/d/1R7bOixB-1tN7U3lEi47L-NDA91CibDJ0VTgrbKO2nlQ/">Adventure Template</a> to develop these prompts into a complete adventure.
			</li>
		    </ul>
		</div>
	    </div>
	)
    }
}

export default Prompts


