import Img from "next/image";
import Link from "next/link";

const Article = ({ id, img, title, desc }) => {
  return (
    <div className="mx-2 my-4 rounded-md bg-gray-800 h-80 w-48">
      <Img
        src={img}
        alt="Random Photo"
        width="200"
        height="150"
        layout="responsive"
        className="object-cover w-48 rounded-r-md"
      />

      <h4 className="m-4 text-white text-sm font-serif font-semibold">
        {title}
      </h4>

      <p className="mx-4 my-2 text-white text-xs w-40">{desc}</p>

      <Link href="/article?id=[id]" as={`/article?id=${id}`}>
        <button className="mx-4 my-2 px-4 py-1 font-bold font-mono text-sm bg-white rounded-sm hover:bg-gray-800 hover:text-white">
          Read More
        </button>
      </Link>

      <style jsx>
        {`
          p {
            word-break: break-word;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            line-height: 17px; /* fallback */
            max-height: 10rem; /* fallback */
            -webkit-line-clamp: 4; /* number of lines to show */
            -webkit-box-orient: vertical;
          }
        `}
      </style>
    </div>
  );
};

export default Article;
