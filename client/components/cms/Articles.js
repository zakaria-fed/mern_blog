import { useEffect, useState } from "react";
import instance from "../../instance";
import Article from "./Article";

const Articles = () => {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		async function fetching() {
			const req = await instance.get("/");

			setArticles(req.data);
		}

		fetching();
	}, []);

	return (
		<div className="flex flex-wrap w-3/4">
			{articles.map((art) => (
				<Article key={art.id} data={art} />
			))}
		</div>
	);
};

export default Articles;
