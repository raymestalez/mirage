/* UNUSED */
import React, { Component } from 'react'

import ReactMarkdown from 'react-markdown'
import challenges from '../../../markdown/guides/challenges.md'

class Challenges extends Component {
    render() {
	return (
	    <div className="main-wrapper">
		<article>
		    <ReactMarkdown source={challenges}
				   className="ncolumns"
				   escapeHtml={false} />
		</article>
	    </div>
	)
    }
}

export default Challenges

