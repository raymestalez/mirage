import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Header extends Component {
    render() {
	return (
	    <header>
		<div className="main-wrapper">
		    <div className="logo">
			<img src="/img/logo_128x128.png"/>
			mirage
		    </div>
		    <div className="right">
			<div className="btn">
			    Rules
			</div>
			<div className="btn">
			    World
			</div>		    
			<div className="btn">
			    Spells/Items
			</div>
			<div className="btn">
			    Character Sheet
			</div>
			{/*  
			    <div className="btn">
			    Adventures
			    </div>
			  */}
		    </div>
		    <div className="clearfix"/>
		</div>
	    </header>
	)
    }
}

export default Header
