import React, { Component } from 'react'
import { connect } from 'react-redux'

import Subnav from './Subnav'
import Image from './Image'
import Stats from './Stats'
import Section from './Section'
import Description from './Description'

/* Actions */
import { updateSheet, loadSheets } from '../../actions/sheetActions'

class Sheet extends Component {
    componentDidMount(){
	var sheets = localStorage.getItem('sheets')
	if (sheets && sheets.length) {
	    this.props.loadSheets(JSON.parse(sheets))
	}
    }
    
    render() {
	var { sheets, updateSheet } = this.props
	var sheet = sheets[0]
	return (
	    <>
		<Subnav/>
		<div className="main-wrapper">	    
		    <article className="character-sheet"  id="character-sheet">
			<input type="text"
			       className="character-name"
			       placeholder="Character's Name"
			       value={sheet.name}
			       onChange={(e)=>
				   updateSheet({...sheet, name:e.target.value})}/>
			<div className="clearfix"/>
			<Image/>
			<Stats/>
			<div className="col-1">
			    <Section title="Abilities" type="Ability"/>
			    <Section title="Spells" type="Spell"/>
			</div>
			<div className="col-2">
			    <Section title="Magic Items" type="Magic Item"/>
			    <Section title="Equipment" type="Item"/>
			</div>

			<div className="clearfix"/>

			<hr/>
			<div className="col-1">
			    <Description type={0}/>
			    <Description type={2}/>
			</div>
			<div className="col-2">
			    <Description type={1}/>

			    <Description type={3}/>			
			</div>
			<div className="clearfix"/>		    
		    </article>
		</div>
	    </>
	)
    }
}

export default connect(({ sheets }) => ({ sheets }), { updateSheet, loadSheets })(Sheet)
