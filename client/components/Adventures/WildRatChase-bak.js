import React, { Component } from 'react'

import ReactMarkdown from 'react-markdown'
import wildRatChase from '../../../markdown/adventures/wild-rat-chase.md'

class WildRatChase extends Component {
    renderSections = () => {
	var text = wildRatChase
	var sections = text.split("----")
	return sections.map((section, i)=>{
	    var lines = section.trim().split("\n")
	    var hasHeader = (lines[0].match(/#/g) || []).length == 1
	    if (hasHeader) {
		var firstLine = lines.shift()
		var rest = lines.join("\n")
		return (
		    <div key={i}>
			<ReactMarkdown source={firstLine}/>
			<ReactMarkdown source={rest}
				       className="columns"
				       escapeHtml={false}
				       key={i} />
			<hr/>
		    </div>
		)
	    }
	    return (
		<div key={i}>
		    <ReactMarkdown source={section}
				   className="columns"
				   escapeHtml={false}/>
		    <hr/>
		</div>
	    )
	})
    }

    render() {
	return (
	    <div className="main-wrapper">
		<article>
		    {this.renderSections()}
		</article>
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
