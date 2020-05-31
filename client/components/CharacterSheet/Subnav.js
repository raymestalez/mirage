import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import blankSheet from '../../../json/sheet-blank.json'

/* Actions */
import { createSheet, loadSheet, deleteSheet } from '../../actions/sheetActions'

class Subnav extends Component {
    renderSheetList = () => {
	var {sheets} = this.props
	return sheets.map((s,i)=>{
	    return(
		<div className="item btn"
		     key={i}
		     onClick={()=> {this.props.loadSheet(s)}}>
		    {s.name}
		</div>
	    )
	})
    }
    createSheet = () => {
	var randomId = Math.random().toString(36).substring(7)
	this.props.createSheet({...blankSheet, id:randomId})
    }
    deleteSheet = () => {
	var {sheets,deleteSheet,loadSheet} = this.props
	deleteSheet(sheets[0])
	if (sheets.length - 1 > 0) {
	    loadSheet(sheets[1]) //load the last edited sheet
	} else {
	    this.createSheet()
	}
    }
    
    render() {
	return (
	    <div className="subnav">
		<div className="main-wrapper">
		    <div className="dropdown">
			<div className="menu-handle btn">
			    <FontAwesomeIcon icon={["fas", "file"]}
					     onClick={() => removeCard(item)}/>
			    Characters
			</div>
			<div className="menu">
			    {this.renderSheetList()}
			</div>
		    </div>
		    <div className="dropdown">
			<div className="menu-handle btn">
			    <FontAwesomeIcon icon={["fas", "plus-circle"]}/>
			    Create
			</div>
			<div className="menu">
			    <div className="item btn"
				 onClick={this.createSheet}>
				Blank
			    </div>
			    <div className="item btn"
				 onClick={()=> { }}>
				Wizard
			    </div>
			    <div className="item btn"
				 onClick={()=> { }}>
				Warrior
			    </div>				
			</div>
		    </div>

		    <div className="btn">
			<FontAwesomeIcon icon={["fas", "upload"]}
					 onClick={() => removeCard(item)}/>
			
			Upload
		    </div>

		    <div className="btn">
			<FontAwesomeIcon icon={["fas", "download"]}
					 onClick={() => removeCard(item)}/>
			
			Download
		    </div>
		    <div className="btn">
			<FontAwesomeIcon icon={["fas", "file-pdf"]}
					 onClick={() => removeCard(item)}/>
			PDF
		    </div>
		    
		    <div className="btn right"
			 onClick={this.deleteSheet}>
			<FontAwesomeIcon icon={["fas", "trash-alt"]}/>
			Delete
		    </div>
		    
		</div>

	    </div>
	)
    }
}

export default connect(({sheets})=>({sheets}), {createSheet,loadSheet, deleteSheet})(Subnav)
