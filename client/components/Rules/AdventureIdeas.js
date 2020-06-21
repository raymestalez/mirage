import React, { Component } from 'react'

import ReactMarkdown from 'react-markdown'
import adventureIdeas from '../../../markdown/adventure-ideas.md'

class AdventureIdeas extends Component {
    render() {
	return (
	    <div className="main-wrapper">
		<article>
		    <h1>Adventure Ideas</h1>
		    <ReactMarkdown source={adventureIdeas}
				   className="columns"
				   escapeHtml={false} />
		</article>
	    </div>
	)
    }
}

export default AdventureIdeas

