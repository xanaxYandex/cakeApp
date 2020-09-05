import React, {ReactNode} from 'react';

import './App.css';
import Header from "./components/header/Header";
import {Cake} from "./models/Cake";
import MainLayout from "./components/main-layout/MainLayout";
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import ItemLayout from "./components/item-layout/ItemLayout";

interface AppState {
	scrollPos: number;
}

class App extends React.Component<any, AppState> {

	public render(): ReactNode {
		const cakes: Cake[] = [];

		for (let i = 0; i < 6; i++) {
			cakes.push({
				id: (i + 1).toString(10),
				title: 'First',
				price: (125 + (i * 12)) - Math.pow(i, 2),
				amountOfPeople: '7',
				numberOfPieces: '14',
				imageSrc: 'https://thumb.tildacdn.com/tild6530-6237-4532-a565-373461383938/-/resize/365x/-/format/webp/big_pic.jpg'
			})
		}

		return (
			<div className="wrapper">
				<svg className="svg-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
					<path fill="#d1c3e0" d="M 800 460 L 800 220 C 800 80 380 300 380 160 Q 400 40 480 0 L 180 0 C 60 0 140 180 0 220 L 0 540 C 560 540 400 440 800 460 ">
					</path>
				</svg>
				<Header/>
				<Router>
					<Switch>
						<Route exact path='/'>
							<MainLayout cakes={cakes} />
						</Route>
						<Route path='/item'>
							<ItemLayout/>
						</Route>
					</Switch>
				</Router>

			</div>
		);
	}
}

export default App;
