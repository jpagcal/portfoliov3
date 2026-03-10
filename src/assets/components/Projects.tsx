import Project from "./Project";

export interface IProject {
	displayText: string;
	subText: string;
}

interface ProjectsProps {
	projectsList: Array<IProject>;
}

const Projects = ({ projectsList }: ProjectsProps) => {
	return (
		<section className="container-projects">
			{projectsList.map(({ displayText, subText }) => (
				<Project displayText={displayText} subText={subText} />
			))}
		</section>
	);
};

export default Projects;
