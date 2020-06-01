import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import blankSheet from '../../../json/sheet-blank.json'
import Wizard from '../../../json/Wizard.json'
import Ninja from '../../../json/Ninja.json'

import { downloadFile } from '../../utils'
/* Actions */
import { createSheet, loadSheet, loadSheets, deleteSheet } from '../../actions/sheetActions'

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
    print = () => {
	window.print()
    }
    createSheet = (archetype) => {
	var randomId = Math.random().toString(36).substring(7)
	this.props.createSheet({...archetype, id:randomId})
    }

    deleteSheet = () => {
	var {sheets,deleteSheet,loadSheet} = this.props
	deleteSheet(sheets[0])
	if (sheets.length == 0) {
	    this.createSheet()
	}
    }
    openFile = (e) => {
	var file = e.target.files[0];
	if (!file) return;
	if (!file.name.includes('json'))  return;

	var reader = new FileReader()
	reader.readAsText(file)
	reader.onload = function(e) {
	    /* Once reading has completed */
	    var contents = e.target.result
	    var json = JSON.parse(contents)
	    console.log("Opened file", file.name, json)
	    if (Array.isArray(json)) {
		this.props.loadSheets(json)
	    } else {
		this.props.loadSheet(json)
	    }
	    //this.props.loadTreeFile(tree)
	}.bind(this)
    }
    downloadSheet = () => {
	var sheet = this.props.sheets[0]	
	downloadFile(sheet.name+".json", JSON.stringify(sheet))
    }
    downloadSheets = () => {
	var { sheets } = this.props
	downloadFile("character-sheets.json", JSON.stringify(sheets))
    }

    render() {
	return (
	    <div className="subnav">
		<div className="main-wrapper">
 		    <div className="dropdown">
			<div className="menu-handle btn">
			    <FontAwesomeIcon icon={["fas", "file"]}/>
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
				 onClick={()=>this.createSheet(blankSheet)}>
				Blank
			    </div>
			    <div className="item btn"
				 onClick={()=>this.createSheet(Wizard)}>
				Wizard
			    </div>
			    <div className="item btn"
				 onClick={()=>this.createSheet(Ninja)}>
				Ninja
			    </div>
			</div>
		    </div>


 		    <div className="dropdown">
			<div className="menu-handle btn">
			    <FontAwesomeIcon icon={["fas", "download"]}/>
			    Save
			</div>
			<div className="menu">
			    <div className="item btn"
				 onClick={this.downloadSheet}>
				Sheet
			    </div>
			    <div className="item btn"
				 onClick={this.print}>
				{/*<FontAwesomeIcon icon={["fas", "file-pdf"]}/>*/}
				PDF
			    </div>
			    <div className="item btn"
				 onClick={this.downloadSheets}>
				Backup
			    </div>
			</div>
		    </div>


 		    <div className="dropdown">
			<div className="menu-handle btn">
			    <FontAwesomeIcon icon={["fas", "upload"]}/>
			    Open
			</div>
			<div className="menu">

			    {/* Hidden html5 file input */}
			    <input type="file" id="file-input"
				   accept=".json"
				   ref={ref => this.fileInput = ref}
				   onChange={this.openFile}/>
			    {/* Just triggers click on file input */}
			    <div className="item btn"
				 onClick={()=> this.fileInput.click()}>
				Sheet
			    </div>
			    <div className="item btn"
				 onClick={()=> this.fileInput.click()}>
				Backup
			    </div>
			</div>
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

export default connect(({sheets})=>({sheets}), {createSheet,loadSheet, loadSheets, deleteSheet})(Subnav)
