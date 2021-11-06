import { useState } from "react";
import instance from "../../instance";

import Link from "next/link";
import NotFound from "../../components/404";

const Edit = ({ data }) => {
	const [formTitle, setFormTitle] = useState(data[0].title);
	const [formDesc, setFormDesc] = useState(data[0].description);

	const handleSubmit = (e) => {
		e.preventDefault();

		// Func to check
		// 1- data[0].title === formTitle
		if (formTitle !== data[0].title || formDesc !== data[0].description) {
			async function fetching() {
				const req = await instance.post("/cms/edit", {
					title: formTitle,
					description: formDesc,
					id: data[0].id,
				});

				alert(req.data.modifiedCount === 1 ? "Successfuly Updated" : "Failed");
			}

			fetching();
		}
	};

	const handleDelete = () => {
		async function fetching() {
			const req = await instance.post("/cms/delete", {
				id: data[0].id,
			});

			alert(req.data.deletedCount === 1 ? "Deleted Successfuly" : "Failed");
		}

		fetching();
	};

	if (data.result === false) {
		return <NotFound />;
	}
	return (
		<div>
			{/* data[0] */}
			<form
				onSubmit={handleSubmit}
				className="m-auto my-4 px-6 py-3 flex flex-col bg-gray-800 w-3/6 rounded"
			>
				<input
					className="bg-gray-900 text-gray-50 px-3 py-2 font-light"
					value={formTitle}
					onChange={(e) => setFormTitle(e.target.value)}
				/>

				<textarea
					className="bg-gray-900 text-gray-50 px-3 py-2 font-light my-4"
					value={formDesc}
					onChange={(e) => setFormDesc(e.target.value)}
				></textarea>

				<button
					onClick={handleSubmit}
					className="rounded bg-gray-700 text-white hover:bg-white hover:text-black"
				>
					Save
				</button>

				<button
					onClick={handleDelete}
					className="my-4 rounded bg-red-600 text-white hover:bg-white hover:text-black"
				>
					Delete
				</button>

				<Link href="/cms/dashboard">
					<h5 className="text-white bg-gray-900 w-32 px-4 py-2 text-center mt-4 cursor-pointer">
						Back
					</h5>
				</Link>
			</form>
		</div>
	);
};

export default Edit;

export const getServerSideProps = async (context) => {
	// 1. Get the Id
	const id = context.query.id;
	// 2. Send an API to server, with body gotten the id
	const req = await instance.get(`/article?id=${id}`);
	let data = await req.data;

	// 3. Get the Resp and send it to the Article Component
	return {
		props: {
			data: data, // I will get from MongoDB
		},
	};
};
