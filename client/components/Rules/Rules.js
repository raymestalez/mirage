import React, { Component } from 'react'

import ReactMarkdown from 'react-markdown'
import PlayerRules from '../../../markdown/rules-player.md'
import CharacterCreation from '../../../markdown/rules-character-creation.md'
import GMRules from '../../../markdown/rules-gm.md'
import welcome from '../../../markdown/welcome.md'

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
		    <h1>Creating your Character</h1>
		    <ReactMarkdown className=""
				   source={CharacterCreation}
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

