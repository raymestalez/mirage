import React, { Component } from 'react'
import { Router, Route } from "react-router-dom"
import history from '../utils/history'

/* Styles */
import '../styles/style.scss'

import Main from './Main'
import Welcome from './Rules/Welcome'
import Rules from './Rules/Rules'
import Spells from './Spells/Spells'
import CharacterSheet from './CharacterSheet/Sheet'

class App extends Component {
    componentDidMount(){
    }

    render() {
	console.log('Render App')
	return (
	    <div className="app">
		<Router history={history}>
		    <Main>
			<Route path="/" exact component={Welcome}/>
			<Route path="/rules" exact component={Rules}/>
			<Route path="/spells"
			       exact component={Spells}/>
			<Route path="/character-sheet"
			       exact component={CharacterSheet}/>
			{/* <Route path="/" exact component={Spells}/> */}
		    </Main>

		    {/* <Route path="/d/:slug" exact component={Main} /> */}
		    {/* <Route path="/unsubscribe/" exact component={Unsubscribe} /> */}
		</Router>
	    </div>
	)
    }
}


export default App
