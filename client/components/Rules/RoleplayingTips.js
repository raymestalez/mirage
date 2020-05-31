import React, { Component } from 'react'

import ReactMarkdown from 'react-markdown'
import roleplayingTips from '../../../markdown/roleplaying-tips.md'

class RoleplayingTips extends Component {
    render() {
	return (
	    <div className="main-wrapper">
		<article>
		    <h1>Roleplaying Tips</h1>
		    <ReactMarkdown source={roleplayingTips}
				   className="columns"
				   escapeHtml={false} />
		</article>
	    </div>
	)
    }
}

export default RoleplayingTips

