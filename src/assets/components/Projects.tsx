import Project from "./Project";

export interface IProject {
	displayText: string;
	subText: string;
	stackList: string[];
	github: string | null;
	description: string | null;
}

interface ProjectsProps {
	projectsList: Array<IProject>;
}

const Projects = ({ projectsList }: ProjectsProps) => {
	return (
		<section className="container-projects">
			{projectsList.map((project) => (
				<Project project={project} />
			))}
		</section>
	);
};

export default Projects;
