import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


/* Actions */
import { updateSheet } from '../../actions/sheetActions'

class Image extends Component {
    constructor(props) {
	super(props)
	this.state = {adding: false}
    }

    updateImage = () => {
	var sheet = this.props.sheets[0]
	var imageUrl=this.image.value
	this.props.updateSheet({...sheet, image:imageUrl})
	this.setState({adding: false})
    }

    render() {
	var sheet = this.props.sheets[0]
	if (this.state.adding) {
	    return (
		<div className="add-image">
		    <input ref={ref => this.image = ref}
			   type="text"
			   placeholder="Image Url"
			   defaultValue={sheet.image} />
		    <FontAwesomeIcon className="icon"
				     icon={["fas", "check-circle"]}
				     onClick={this.updateImage}/>
		</div>
	    )
	}
	if (sheet.image) {
	    return (
		<div className="character-image"
		     style={{backgroundImage:'url("'+sheet.image+'")'}}
		     onClick={()=> this.setState({adding: true})}/>
	    )
	} else {
	    return (
		<div className="add-image"
		     onClick={()=>this.setState({
			 adding: true
		     })}>
		    Add Image
		    <FontAwesomeIcon className="icon"
				     icon={["fas", "plus-circle"]}/>
		</div>
	    )
	}
    }
}

export default connect(({sheets})=>({sheets}), {updateSheet})(Image)
