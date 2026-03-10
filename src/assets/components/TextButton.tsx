interface LinkButtonProps {
	displayText: string;
	href: string;
}

const LinkButton = ({ displayText, href }: LinkButtonProps) => {
	return (
		<a className="link-text" href={href}>
			{displayText}
		</a>
	);
};

export default LinkButton;
