import type { IProject } from "./Projects";
import StackTag from "./StackTag";
import githubSRC from "../icons/GitHub_Invertocat_Black.svg";

interface ProjectProps {
	project: IProject;
}

const Project = ({
	project: { displayText, subText, stackList, github },
}: ProjectProps) => {
	return (
		<div className="project">
			<header className="project-header">{displayText}</header>
			<p className="project-subtext">{subText}</p>
			<div className="project-details">
				<div className="stack-list">
					{stackList.map((stackTag) => (
						<StackTag displayText={stackTag} />
					))}
				</div>
				{github && (
					<a className="github-link" href={github}>
						<img src={githubSRC} width="16px" height="16px" />
						<p
							style={{
								font: "16px Geist",
								fontWeight: 500,
								color: "#222",
							}}
						>
							Github
						</p>
					</a>
				)}
			</div>
		</div>
	);
};

export default Project;
