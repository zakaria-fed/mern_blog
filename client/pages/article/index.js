import Head from "next/head";
import Link from "next/link";

import instance from "../../instance";

const Article = ({ data }) => {
  return (
    <div className="bg-black m-0 py-10 text-white">
      <Head>
        <title>{data[0].title}</title>
      </Head>

      {/* Image */}
      <div className="h-40 bg-no-repeat bg-cover bg-center article_img"></div>

      {/* Title */}
      <h1 className="text-2xl">{data[0].title}</h1>

      {/* Desc */}
      <p className="text-sm max-w-md">{data[0].description}</p>

      {/* Back Button */}
      <Link href="/">
        <button className="bg-white text-black text-sm font-thin">Back</button>
      </Link>

      {console.log(data[0])}

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
  const data = await req.data;
  // 3. Get the Resp and send it to the Article Component

  return {
    props: {
      data: data, // I will get from MongoDB
    },
  };
};
