import Head from "next/head";
import Link from "next/link";
import NotFound from "../../components/404";

import instance from "../../instance";

const Article = ({ data }) => {
	if (data.result === false) {
		console.log(data);
		return <NotFound />;
	}

	return (
		<div className="bg-black m-0 py-10 text-white">
			<Head>
				<title>{data[0].title}</title>
			</Head>

			{/* Image */}
			{data[0].img && (
				<img
					src={data[0].img}
					className="m-auto object-cover w-96 h-64 rounded"
				/>
			)}

			<div className="m-auto my-10 w-9/12 sm:w-3/6">
				{/* Title */}
				<h1 className="text-2xl mb-8 font-serif">{data[0].title}</h1>

				{/* Desc */}
				<p className="mb-6 text-sm first-letter:uppercase first-letter:text-lg first-letter:font-black first-letter:font-serif w-full">
					{data[0].description}
				</p>

				{/* Back Button */}
				<Link href="/">
					<button className="px-5 py-2 bg-white text-black text-sm font-semibold">
						Back
					</button>
				</Link>
			</div>

			<style jsx>
				{`
					.article_img {
						background-image: url(${data[0].img});
					}
				`}
			</style>
		</div>
	);
};

export default Article;

export const getServerSideProps = async (context) => {
	// 1. Get the Id
	const id = context.query.id;
	// 2. Send an API to server, with body gotten the id
	const req = await instance.get(`/article?id=${id}`);
	let data = await req.data;

	// if (!data.result) {
	// 	data = false;
	// }

	// 3. Get the Resp and send it to the Article Component
	return {
		props: {
			data: data, // I will get from MongoDB
		},
	};
};
