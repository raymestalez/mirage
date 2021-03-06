import React, { Component } from 'react'
import { Router, Route } from "react-router-dom"
import history from '../utils/history'

/* Styles */
import '../styles/style.scss'

import ScrollToTop from './ScrollToTop'
import Main from './Main'
import Welcome from './Rules/Welcome'
import Rules from './Rules/Rules'
import World from './Rules/World'
import HCs from './Prompts/HCs'
import Goals from './Prompts/Goals'
import Complications from './Prompts/Complications'
import Challenges from './Prompts/Challenges'
import VillainMoves from './Prompts/VillainMoves'
import Prompts from './Prompts/Prompts'
import RoleplayingTips from './Rules/RoleplayingTips'
import AdventureIdeas from './Rules/AdventureIdeas'
import AdventureDesign from './Rules/AdventureDesign'
import ImprovingCombat from './Rules/Combat'
import WildRatChase from './Adventures/WildRatChase'

import CharacterSheet from './CharacterSheet/Sheet'

class App extends Component {
    componentDidMount(){
    }

    render() {
	console.log('Render App')
	return (
	    <div className="app">
		<Router history={history}>
		    <ScrollToTop/>
		    <Main>
			<Route path="/" exact component={Welcome}/>
			<Route path="/rules" exact component={Rules}/>
			<Route path="/world" exact component={World}/>
			<Route path="/prompts" exact component={Prompts}/>
			<Route path="/prompts/high-concept-ideas" exact
			       component={HCs}/>
			<Route path="/prompts/goals" exact
			       component={Goals}/>
			<Route path="/prompts/complications" exact
			       component={Complications}/>			
			<Route path="/prompts/challenges" exact
			       component={Challenges}/>
			<Route path="/prompts/villain-moves" exact
			       component={VillainMoves}/>
			<Route path="/adventure-ideas" exact
			       component={AdventureIdeas}/>
			<Route path="/guide/roleplaying-tips" exact
			       component={RoleplayingTips}/>
			<Route path="/guide/adventure-design" exact
			       component={AdventureDesign}/>
			<Route path="/guide/improving-combat" exact
			       component={ImprovingCombat}/>
			<Route path="/character-sheet"
			       exact component={CharacterSheet}/>
			<Route path="/adventure/wild-rat-chase"
			       exact component={WildRatChase}/>
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
