import React from 'react';
import './App.css';
const { useEffect, useState } = React;

const Clock = () => {
	const [date, setDate] = useState(new Date());

	useEffect(() => {
		const timerID = setInterval(() => {
			setDate(new Date());
		}, 1000);

		return () => clearInterval(timerID);
	}, []);

	return (
		<div>
			<h1>Hello, world!</h1>
			<h2>It is {date.toLocaleTimeString()}.</h2>
		</div>
	);
};

function App() {
	return <div>{Clock()}</div>;
}

export default App;
