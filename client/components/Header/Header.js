import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Link } from "react-router-dom"

class Header extends Component {
    render() {
	return (
	    <header>
		<div className="main-wrapper">
		    <Link to="/" className="logo">
			<img src="/img/logo_128x128.png"/>
			mirage
		    </Link>
		    <div className="right">
			<Link to="/rules" className="btn">
			    Rules
			</Link>
			{/*  
			    <Link to="/world" className="btn">
			    World
			    </Link>
			  */}
			{/*  
			    <Link to="/spells" className="btn">
			    Spells/Items
			    </Link>
			  */}
			<Link to="/character-sheet" className="btn">
			    Character Sheet
			</Link>
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
