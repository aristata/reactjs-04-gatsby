import React from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import { Link, PageProps, graphql } from "gatsby";

/*************************************************************************************************
 * gatsby 에서의 라우팅
 *
 * - src/pages/ 경로 아래에 JSX 파일이 위치하면 파일명이 라우팅 이름이 된다
 *************************************************************************************************/
export default function blog({ data }: PageProps<Queries.BlogPostsQuery>) {
  return (
    <Layout title="Blog">
      <section className="grid grid-cols-4 gap-4">
        {data.allMdx.nodes.map((file, index) => (
          <div className="border-2 rounded-xl border-green-700 p-4" key={index}>
            <Link to={`/blog/${file.frontmatter?.slug}`}>
              <article className="mb-4">
                <div className="flex flex-row gap-x-2 text-xl font-bold">
                  <h4>{"📷 )))"}</h4>
                  <h2>{file.frontmatter?.title}</h2>
                </div>
                <div className="flex flex-row gap-x-2 text-md mt-4">
                  <h4>{file.frontmatter?.category}</h4>
                  <h5>{file.frontmatter?.date}</h5>
                </div>
                <hr />
                <p className="mt-4">{file.excerpt}</p>
              </article>
            </Link>
          </div>
        ))}
      </section>
    </Layout>
  );
}

export const query = graphql`
  query BlogPosts {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          slug
          title
          date(formatString: "YYYY.MM.DD")
          category
        }
        excerpt(pruneLength: 20)
        body
      }
    }
  }
`;

export const Head = () => <Seo title="Blog" />;
