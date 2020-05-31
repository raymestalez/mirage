import React, { Component } from 'react'

import ReactMarkdown from 'react-markdown'
import adventureElements from '../../../markdown/adventure-elements.md'
import adventureStructure from '../../../markdown/adventure-structure.md'
import adventurePreparing from '../../../markdown/adventure-preparing.md'
import adventureRunning from '../../../markdown/adventure-running.md'

class AdventureDesign extends Component {
    render() {
	return (
	    <div className="main-wrapper">
		<article>
		    <h1>Elements of an Adventure</h1>
		    <ReactMarkdown source={adventureElements}
				   className="columns"
				   escapeHtml={false} />
		    <hr/>
		    <h1>Structure of an Adventure</h1>
		    <ReactMarkdown source={adventureStructure}
				   className="columns"
				   escapeHtml={false} />
		    <hr/>
		    <h1>Preparing an Adventure</h1>
		    <ReactMarkdown source={adventurePreparing}
				   className="columns"
				   escapeHtml={false} />
		    <hr/>
		    <h1>Running an Adventure</h1>
		    <ReactMarkdown source={adventureRunning}
				   className="columns"
				   escapeHtml={false} />
		</article>
	    </div>
	)
    }
}

export default AdventureDesign

