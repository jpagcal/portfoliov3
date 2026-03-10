import "./App.css";
import Header from "./assets/components/Header";
import Nav from "./assets/components/Nav";
import Projects from "./assets/components/Projects";
import projectsList from "./projects.json";

function App() {
	return (
		<>
			<Header />
			<Nav />
			<Projects projectsList={projectsList} />
		</>
	);
}

export default App;
