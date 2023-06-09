import React from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component {

	state = { advice: '' };

	componentDidMount() {
		this.fetchAdvice();
	}

	fetchAdvice = () => {
		axios.get('https://api.adviceslip.com/advice')
		.then((response) => {
			const { advice } = response.data.slip;

			this.setState({ advice });
		})

		.catch ((error) => {
			console.log(error);
		})
	}

	render() {
		const { advice } = this.state;

		return (
			<div className="a">
				<div className="b">
					<h1 className="c">
					{this.state.advice}
					</h1>
				</div>
        <button className="button" onClick=
					{this.fetchAdvice}>
						<h2>NEXT</h2>
					</button>
			</div>
		);
	}
}

export default App;
