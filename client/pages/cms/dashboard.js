import dashStl from "../../styles/Dashboard.module.css";
import Head from "next/head";
import Articles from "../../components/cms/Articles";
import { useState } from "react";
import instance from "../../instance";

const Dashboard = () => {
	const [title, setTitle] = useState("");
	const [articleDesc, setArticleDesc] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		// Check if they are empty or have a limited n° of char
		if (title.length < 5 || articleDesc.length < 25) {
			alert(
				"Pls try to do more than 5 characters in the Title, and more than 25 in Article"
			);
		} else {
			async function fetching() {
				const req = await instance.post("/cms/insert", {
					id: Math.floor(Math.random() * 101) + 1,
					title,
					description: articleDesc,
				});

				// alert(req.data.insertedCount === 1 ? "Successfuly Inserted" : "Failed");

				console.log(req.data);

				setTitle("");
				setArticleDesc("");

				// Reload
				window.location.reload(false);
			}

			fetching();
		}
	};

	return (
		<div className="w-auto mt-10 ml-10 p-0">
			<Head>
				<title>Dashboard</title>
			</Head>

			<h3
				className={`text-sm text-black font-medium font-mono ${dashStl.dash__title}`}
			>
				Articles
			</h3>

			<Articles />

			{/* Insert Article */}
			<h3
				className={`text-sm text-black font-medium font-mono ${dashStl.dash__title}`}
			>
				Insert Article
			</h3>

			<form className="flex flex-col">
				<input
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					className="my-2 w-96 px-2 py-4 bg-gray-800 text-white rounded-md"
					placeholder="Title of the Article"
				/>
				<textarea
					value={articleDesc}
					onChange={(e) => setArticleDesc(e.target.value)}
					placeholder="Article"
					className="my-2 w-96 px-2 py-4 bg-gray-800 text-white rounded-md"
				></textarea>

				<button
					className="px-2 py-3 bg-gray-500 text-white font-semibold font-mono rounded-lg w-32"
					type="submit"
					onClick={handleSubmit}
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default Dashboard;
