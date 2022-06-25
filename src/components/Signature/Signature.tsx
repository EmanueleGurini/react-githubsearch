import React from "react";

import styles from "./signature.module.css";

const Signature: React.FC = () => {
	return (
		<div className={styles.signature}>
			<p>
				Made with &hearts; by Emanuele Gurini -{" "}
				<a
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
