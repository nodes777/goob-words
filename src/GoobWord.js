import React from "react";
function GoobWord(props) {
	return (
		<div className="goob-word">
			<h1 style={{ fontSize: "2.5em" }}>
				{props.goobword.charAt(0).toUpperCase() +
					props.goobword.slice(1)}
			</h1>
		</div>
	);
}

export default GoobWord;
