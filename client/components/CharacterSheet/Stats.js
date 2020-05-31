import React, { Component } from 'react'
import { connect } from 'react-redux'

class Stats extends Component {
    renderStats = () => {
	var stats = ["Health", "Energy","Memory","section","Experience","Level"]

	return this.props.sheet.stats.map((stat,i)=> {
	    return (
		<div key={i} className="stat">
		    <div className="title">
			{stat.title}
		    </div>
		    <input type="text"
			   className="value"
			   defaultValue={stat.value} />
		</div>
	    )
	})
    }
    
    render() {
	return (
	    <div>
		<div className="col-1">
		    <div className="stats">
			{this.renderStats().splice(0,3)}
		    </div>
		</div>
		<div className="col-1">
		    <div className="stats">
			{this.renderStats().splice(3,6)}
		    </div>
		</div>
	    </div>
	)
    }
}

export default connect(({sheet})=>({sheet}), {})(Stats)
