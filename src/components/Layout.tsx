import { Link, graphql, useStaticQuery } from "gatsby";
import React from "react";

interface Props {
  children: React.ReactElement;
  title: string;
}

export default function Layout({ children, title }: Props) {
  const data = useStaticQuery<Queries.SeoDataQuery>(graphql`
    query SeoData {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div className="container mx-auto bg-stone-50 h-screen">
      <nav className="flex flex-row gap-x-2 bg-lime-50">
        <div className="flex justify-center items-center m-4 border-solid border-2 rounded-2xl bg-gradient-to-r from-violet-300 to-amber-300">
          <h1 className="p-4 text-xl font-bold">
            {data?.site?.siteMetadata?.title}
          </h1>
        </div>
        <ul className="flex flex-row gap-x-4 justify-center items-center text-xl">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
      <main className="p-4">
        <h1 className="text-2xl font-bold p-4">🚕 {title}</h1>
        <div className="p-4">{children}</div>
      </main>
    </div>
  );
}
