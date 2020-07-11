import React, { Component } from 'react'

import ReactMarkdown from 'react-markdown'
import HCs from '../../../markdown/prompts/HCs.md'

class Prompts extends Component {
    render() {
	var prompts = HCs.split('\n')
	// convert into bulleted list
	prompts = prompts.filter(l => l) // filter out empty strings
	prompts = prompts.map((p,i)=> ("1. " + p))
	prompts = prompts.join('\n')
	return (
	    <div className="main-wrapper">
		<article>
		    <h1>List of High Concept Ideas</h1>
		    <ReactMarkdown source={prompts}
				   className="ncolumns"
				   escapeHtml={false} />
		</article>
	    </div>
	)
    }
}

export default Prompts

