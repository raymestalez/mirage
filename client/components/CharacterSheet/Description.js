import React, { Component } from 'react'
import { connect } from 'react-redux'
import TextareaAutosize from 'react-textarea-autosize';

var descriptions = [
    {
	title:"Appearance",
	prompt:"Distinctive features, outfit, quirks, manner of speaking."
    },
    {
	title:"Personality",
	prompt:"Ideals, opinions, fears, weakness they need to overcome."
    },
    {
	title:"Ambitions",
	prompt:"What do they want from life? What is their current goal?"
    },
    {
	title:"Backstory",
	prompt:"Significant events that shaped them. Their deep dark secret."
    }    
]
class Description extends Component {
    render() {
	return (
	    <div className="section">
		<div className="section-title">
		    {descriptions[this.props.type].title}
		</div>
		<TextareaAutosize
		    placeholder={descriptions[this.props.type].prompt}/>
	    </div>
	)
    }
}

export default connect(({})=>({}), {})(Description)
