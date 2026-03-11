interface LinkIconProps {
	href: string;
	src: string;
	width?: string;
	height?: string;
}

const LinkIcon = ({ href, src, width, height }: LinkIconProps) => {
	return (
		<a className="link-icon" href={href}>
			<img src={src} width={width || "28px"} height={height || "28px"} />
		</a>
	);
};

export default LinkIcon;
