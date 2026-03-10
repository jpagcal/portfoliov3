interface StackTagProps {
	displayText: string;
}

const StackTag = ({ displayText }: StackTagProps) => {
	return <div className="stack-tag">{displayText}</div>;
};

export default StackTag;
