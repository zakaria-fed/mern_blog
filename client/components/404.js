import notFoundStyles from "../styles/NotFound.module.css";

const NotFound = () => {
	return (
		<div>
			<div class={`${notFoundStyles.div} ${notFoundStyles.number}`}>404</div>
			<div class={`${notFoundStyles.div} ${notFoundStyles.text}`}>
				<span>Ooops...</span>
				<br />
				page not found
			</div>
		</div>
	);
};

export default NotFound;
