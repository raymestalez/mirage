import React, { Component } from 'react'

import ReactMarkdown from 'react-markdown'
import welcome from '../../../markdown/welcome.md'

class Welcome extends Component {
    componentDidMount(){}

    componentDidUpdate(prevProps, prevState){}

    render() {
	console.log("Render Rules")
	return (
	    <div className="main-wrapper">
		<article>
		    <img className="header-img" src="/img/valley_cropped.png"/>
		    <ReactMarkdown source={welcome} />
		</article>
	    </div>
	)
    }
}

export default Welcome

