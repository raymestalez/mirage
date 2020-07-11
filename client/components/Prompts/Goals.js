import React, { Component } from 'react'

import ReactMarkdown from 'react-markdown'
import goals from '../../../markdown/prompts/goals.md'

class Prompts extends Component {
    render() {
	var prompts = goals.split('\n')
	// convert into bulleted list
	prompts = prompts.filter(l => l) // filter out empty strings
	prompts = prompts.map((p,i)=> ("1. " + p))
	prompts = prompts.join('\n')
	return (
	    <div className="main-wrapper">
		<article>
		    <h1>List of Adventure Goals</h1>
		    <ReactMarkdown source={prompts}
				   className="ncolumns"
				   escapeHtml={false} />
		</article>
	    </div>
	)
    }
}

export default Prompts

