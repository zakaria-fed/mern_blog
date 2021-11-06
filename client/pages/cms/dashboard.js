import dashStl from "../../styles/Dashboard.module.css";
import Head from "next/head";
import Articles from "../../components/cms/Articles";

const Dashboard = () => {
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
		</div>
	);
};

export default Dashboard;
