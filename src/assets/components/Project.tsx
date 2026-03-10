interface ProjectProps {
	displayText: string;
	subText?: string;
	stackList?: Array<string>;
}

const Project = ({ displayText, subText }: ProjectProps) => {
	return (
		<div className="project">
			<header className="project-header">{displayText}</header>
			<p className="project-subtext">{subText}</p>
		</div>
	);
};

export default Project;
