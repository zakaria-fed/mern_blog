import Head from "next/head";
import { useEffect, useState } from "react";
import Article from "../components/Article";
import Nav from "../components/Nav";

import instance from "../instance";

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetching() {
      const req = await instance.get("/");

      setArticles(req.data);
    }

    fetching();
  }, []);

  return (
    <div>
      <Head>
        <title>Blog App "Zakaria Imzilen"</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main className="flex flex-wrap justify-center my-11">
        {articles.map((art) => (
          <Article
            key={art.id}
            id={art.id}
            title={art.title}
            desc={art.description}
            img={art.img}
          />
        ))}
      </main>
    </div>
  );
}
