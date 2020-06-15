import React, { Component } from 'react'

import ReactMarkdown from 'react-markdown'
import improvingCombat from '../../../markdown/guides/improving-combat.md'

class ImprovingCombat extends Component {
    render() {
	return (
	    <div className="main-wrapper">
		<article>
		    <h1>Improving Combat</h1>
		    <ReactMarkdown source={improvingCombat}
				   className="ncolumns"
				   escapeHtml={false} />
		</article>
	    </div>
	)
    }
}

export default ImprovingCombat

