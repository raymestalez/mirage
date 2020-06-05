import React, { Component } from 'react'

/* Components */
import Header from './Header/Header'

class Main extends Component {
    componentDidMount(){}

    componentDidUpdate(prevProps, prevState){}

    render() {
	console.log("Render Main")
	return (
            <>
		<Header/>
		<div className="main" id="main">
		{this.props.children}
		</div>
		{/* <footer></footer> */}
            </>
	)
    }
}

export default Main

