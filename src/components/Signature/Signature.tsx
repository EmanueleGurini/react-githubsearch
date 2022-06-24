import React from "react";

const Signature: React.FC = () => {
	return (
		<div>
			<p style={{ textAlign: "center", padding: "24px 16px" }}>
				Made with &hearts; by Emanuele Gurini -{" "}
				<a
					style={{ textDecoration: "none", color: "#697c9a" }}
					href="https://github.com/EmanueleGurini/react-githubsearch"
					target="_blank"
				>
					GitHub
				</a>{" "}
			</p>
		</div>
	);
};

export default Signature;
