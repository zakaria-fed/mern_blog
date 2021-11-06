import dashStyles from "../../styles/Dashboard.module.css";
import Link from "next/link";

const Article = ({ data }) => {
	return (
		<div className="p-2 w-40 h-52 rounded-sm flex flex-col justify-between mx-3 my-1 bg-gray-200">
			<h4 className="text-base">{data.title}</h4>
			<p className={`${dashStyles.dash__para}`}>{data.description}</p>
			<Link href="/cms/edit?id=[id]" as={`/cms/edit?id=${data.id}`}>
				<button className="bg-black rounded text-white font-bold">Edit</button>
			</Link>
		</div>
	);
};

export default Article;
