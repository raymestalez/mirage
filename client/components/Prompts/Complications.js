import React, { Component } from 'react'

import ReactMarkdown from 'react-markdown'
import complications from '../../../markdown/prompts/complications.md'

class Prompts extends Component {
    render() {
	var prompts = complications.split('\n')
	// convert into bulleted list
	prompts = prompts.filter(l => l) // filter out empty strings
	prompts = prompts.map((p,i)=> ("1. " + p))
	prompts = prompts.join('\n')
	return (
	    <div className="main-wrapper">
		<article>
		    <h1>List of Complications</h1>
		    <ReactMarkdown source={prompts}
				   className="ncolumns"
				   escapeHtml={false} />
		</article>
	    </div>
	)
    }
}

export default Prompts

