import React, { Component } from 'react'

import { Link } from "react-router-dom"
import ReactMarkdown from 'react-markdown'
import moves from '../../../markdown/prompts/villain-moves.md'

class Prompts extends Component {
    render() {
	var prompts = moves.split('\n')
	// convert into bulleted list
	prompts = prompts.filter(l => l) // filter out empty strings
	prompts = prompts.map((p,i)=> ("1. " + p))
	prompts = prompts.join('\n')
	return (
	    <div className="main-wrapper">
		<article>
		    <h1>List of Villain's Moves</h1>
		    <Link className="small" to="/prompts">
			[Random Prompts Tool]
		    </Link>
		    <ReactMarkdown source={prompts}
				   className="ncolumns"
				   escapeHtml={false} />
		</article>
	    </div>
	)
    }
}

export default Prompts

