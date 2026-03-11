import LinkIcon from "./LinkIcon";
import githubSRC from "../icons/GitHub_Invertocat_Black.svg";
import linkedinSRC from "../icons/icons8-linkedin.svg";
import mailSRC from "../icons/Gmail_icon_(2020).svg";

const Nav = () => {
	return (
		<section className="container-nav">
			<nav className="container-nav-links">
				<LinkIcon
					href="http://www.github.com/jpagcal"
					src={githubSRC}
					width="24px"
					height="24px"
				/>
				<LinkIcon
					href="http://www.linkedin.com/in/julian-pagcaliwagan"
					src={linkedinSRC}
					width="32px"
					height="32px"
				/>
				<LinkIcon href="mailto:julianpagcaliwagan@gmail.com" src={mailSRC} />
			</nav>
		</section>
	);
};

export default Nav;
