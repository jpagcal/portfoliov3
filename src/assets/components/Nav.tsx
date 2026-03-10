import LinkButton from "./TextButton";

const Nav = () => {
	return (
		<section className="container-nav">
			<nav className="container-nav-links">
				<LinkButton displayText="Resume" href="" />
				<LinkButton
					displayText="LinkedIn"
					href="http://www.linkedin.com/in/julian-pagcaliwagan"
				/>
				<LinkButton displayText="Github" href="http://www.github.com/jpagcal" />
			</nav>
		</section>
	);
};

export default Nav;
