import React, { Component } from 'react'

import ReactMarkdown from 'react-markdown'
import wildRatChase from '../../../markdown/adventures/wild-rat-chase.md'

import NPCs from '../NPCs/NPCs'

class WildRatChase extends Component {
    render() {
	return (
	    <div className="main-wrapper">
		<article>
		    {/* <NPCs/> */}
		    <ReactMarkdown source={wildRatChase}
				   escapeHtml={false}/>
		</article>
	    </div>
	)
    }
}

export default WildRatChase
