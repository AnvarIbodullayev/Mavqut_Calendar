import './App.css';
import Calendar from './components/Calendar/Calendar';
import Edit from './components/Edit/Edit';
import Mavzu from './components/Mavzu/Mavzu';
import Privacy from './components/Privacy/Privacy';
import Terms from './components/Terms/Terms';


function App() {
	return (
		<div className="App">

			{/*<Calendar />*/}
			{/*<Edit />*/}
			{/*<Mavzu />*/}
			<Privacy />
			<Terms />

		</div>
	);
}

export default App;