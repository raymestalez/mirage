import React, { Component } from 'react'

import ReactMarkdown from 'react-markdown'
import PlayerRules from '../../data/rules-player.md'
import GMRules from '../../data/rules-gm.md'
import welcome from '../../data/welcome.md'

class Rules extends Component {
    componentDidMount(){}

    componentDidUpdate(prevProps, prevState){}

    render() {
	console.log("Render Rules")
	return (
	    <div className="main-wrapper">
		<article>
		    <h1>Rules for Players</h1>
		    <ReactMarkdown className="columns"
				   source={PlayerRules}
				   escapeHtml={false} />
		    <hr/>
		    <h1>Rules for the GM</h1>
		    <ReactMarkdown className="columns"
				   source={GMRules}
				   escapeHtml={false} />
		    
		</article>
	    </div>
	)
    }
}

/*  */

export default Rules

