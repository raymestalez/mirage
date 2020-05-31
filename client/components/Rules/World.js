import React, { Component } from 'react'

import ReactMarkdown from 'react-markdown'
import world from '../../../markdown/world.md'
import locations from '../../../markdown/locations.md'

class Welcome extends Component {
    componentDidMount(){}

    componentDidUpdate(prevProps, prevState){}

    render() {
	return (
	    <div className="main-wrapper">
		<article>
		    <ReactMarkdown source={world} />
		    <h1>Locations</h1>
		    <ReactMarkdown source={locations}
				   className="columns"
				   escapeHtml={false} />
		</article>
	    </div>
	)
    }
}

export default Welcome

