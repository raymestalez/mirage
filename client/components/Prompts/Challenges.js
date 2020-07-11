import React, { Component } from 'react'

import ReactMarkdown from 'react-markdown'

import { Link } from "react-router-dom"
import action from '../../../markdown/prompts/action-adventure.md'
import exploration from '../../../markdown/prompts/exploration.md'
import social from '../../../markdown/prompts/social.md'
import stealth from '../../../markdown/prompts/stealth.md'
import mystery from '../../../markdown/prompts/mystery.md'
//import moves from '../../../markdown/prompts/villain-moves.md'

class Prompts extends Component {
    renderPrompts = (file) => {
	var prompts = file.split('\n')
	// convert into bulleted list
	prompts = prompts.filter(l => l) // filter out empty strings
	prompts = prompts.map((p,i)=> ("1. " + p))
	prompts = prompts.join('\n')
	return (
	    <ReactMarkdown source={prompts}
			   className="ncolumns"
			   escapeHtml={false} />
	)
    }
    render() {
	return (
	    <div className="main-wrapper">
		<article>
		    <h1>List of Challenges</h1>
		    <Link className="small" to="/prompts">
			[Random Prompts Tool]
		    </Link>
		    <h3>Action/Adventure</h3>
		    {this.renderPrompts(action)}
		    <h3>Exploration</h3>
		    {this.renderPrompts(exploration)}
		    <h3>Social/Intrigue</h3>
		    {this.renderPrompts(social)}
		    <h3>Stealth/Heist</h3>
		    {this.renderPrompts(stealth)}
		    <h3>Mystery/Investigation</h3>
		    {this.renderPrompts(mystery)}
		</article>
	    </div>
	)
    }
}

export default Prompts
