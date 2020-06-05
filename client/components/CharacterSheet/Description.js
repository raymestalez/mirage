import React, { Component } from 'react'
import { connect } from 'react-redux'
import TextareaAutosize from 'react-textarea-autosize'

/* Actions */
import { updateSheet } from '../../actions/sheetActions'


var descriptions = [
    {
	title:"Appearance",
	prompt:"Distinctive features, outfit, quirks, manner of speaking.",
	key:"appearance"
    },
    {
	title:"Personality",
	prompt:"Ideals, opinions, fears, weakness they need to overcome.",
	key:"personality"
    },
    {
	title:"Ambitions",
	prompt:"What do they want from life? What is their current goal?",
	key:"ambitions"
    },
    {
	title:"Backstory",
	prompt:"Significant events that shaped them. Their deep dark secret.",
	key:"backstory"
    }    
]
class Description extends Component {
    update = (value, key)=> {
	var sheet = this.props.sheets[0]
	sheet = {...sheet}
	sheet[key] = value
	this.props.updateSheet(sheet)
    }

    render() {
	var sheet = this.props.sheets[0]
	var key = descriptions[this.props.type].key
	return (
	    <div className="section">
		<div className="section-title">
		    {descriptions[this.props.type].title}
		</div>
		<TextareaAutosize
		placeholder={descriptions[this.props.type].prompt}
		value={sheet[key]}
		onChange={(e)=>this.update(e.target.value,key)} />
	    </div>
	)
    }
}

export default connect(({sheets})=>({sheets}), { updateSheet })(Description)
