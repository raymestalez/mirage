import React, { Component } from 'react'

import ReactMarkdown from 'react-markdown'
import wildRatChase from '../../../markdown/adventures/wild-rat-chase.md'

import NPCs from '../NPCs/NPCs'

class WildRatChase extends Component {
    renderPages = () => {
	var text = getText(wildRatChase)
	text = text.replace(/\\column/g,'<div class="column-break"></div>')
	var pages = text.split("\\page")
	return pages.map((page,i)=>{
	    return(
		<article className="adventure" key={i}>
		    {i==0 && <h1>{getFirstLine(wildRatChase).split("#")[1]}</h1>}
		    <ReactMarkdown source={page}
				   className="columns"
				   escapeHtml={false}/>
		</article>
	    )
	})
    }
    render() {
	var title = getText(wildRatChase)
	return (
	    <div className="main-wrapper">
		{this.renderPages()}
	    </div>
	)
    }
}

export default WildRatChase

function getFirstLine(text) {
    var lines = text.split("\n");   // split all lines into array
    var firstline = lines.shift();   // read and remove first line
    var rest = lines.join("\n");     // re-join the remaining lines
    return firstline
}

function getText(text) {
    var lines = text.split("\n");   // split all lines into array
    var firstline = lines.shift();   // read and remove first line
    var rest = lines.join("\n");     // re-join the remaining lines
    return rest
}
