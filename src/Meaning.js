import React from "react";
function Meaning(props) {
	return (
		<div className="goob-meaning">
			<p>
				{props.meaning.charAt(0).toUpperCase() + props.meaning.slice(1)}
			</p>
		</div>
	);
}

export default Meaning;
