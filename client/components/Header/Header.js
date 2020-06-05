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
			<Link to="/world" className="btn">
			    World
			</Link>
			<Link to="/character-sheet" className="btn">
			    Character Sheet
			</Link>
 			<div className="dropdown">
			    <div className="menu-handle btn">
				Guides
			    </div>
			    <div className="menu">
				<Link to="/roleplaying-tips" className="item btn">
				    Roleplaying Tips
				</Link>
				<Link to="/adventure-design" className="item btn">
				    Adventure Design
				</Link>
			    </div>
			</div>

 			<div className="dropdown">
			    <div className="menu-handle btn">
				Adventures
			    </div>
			    <div className="menu">
				<Link to="/wild-rat-chase" className="item btn">
				    Wild Rat Chase
				</Link>
			    </div>
			</div>			
		    </div>
		    <div className="clearfix"/>
		</div>
	    </header>
	)
    }
}

export default Header
