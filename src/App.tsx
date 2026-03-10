import "./App.css";
import Header from "./assets/components/Header";
import Nav from "./assets/components/Nav";
import Projects, { type IProject } from "./assets/components/Projects";

function App() {
	const projectsList: IProject[] = [
		{
			displayText: "Parallel Sorting by Regular Sampling Implementation",
			subText:
				"A 1993 parallel sorting algorithm implemented with the POSIX pthread API using shared-memory SPMD programming.",
		},
		{
			displayText: "Net++",
			subText:
				"A C++ library providing class-based encapsulation over the POSIX sockets API for a cleaner interface and automatic resource management.",
		},
		{
			displayText: "Aircard",
			subText:
				"A mobile-based digital business card application that uses QR codes to create connections.",
		},
	];

	return (
		<>
			<Header />
			<Nav />
			<Projects projectsList={projectsList} />
		</>
	);
}

export default App;
