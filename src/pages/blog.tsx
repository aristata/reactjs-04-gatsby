import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { PageProps, graphql } from "gatsby";

/*************************************************************************************************
 * gatsby 에서의 라우팅
 *
 * - src/pages/ 경로 아래에 JSX 파일이 위치하면 파일명이 라우팅 이름이 된다
 *************************************************************************************************/
export default function blog({ data }: PageProps<Queries.BlogPostsQuery>) {
  return (
    <Layout title="Blog">
      <section>
        {data.allMdx.nodes.map((file, index) => (
          <article key={index}>
            <h2>{file.frontmatter?.title}</h2>
            <h5>{file.frontmatter?.date}</h5>
            <hr />
            <p>{file.excerpt}</p>
          </article>
        ))}
      </section>
    </Layout>
  );
}

export const query = graphql`
  query BlogPosts {
    allMdx {
      nodes {
        frontmatter {
          title
          date(formatString: "YYYY.MM.DD")
        }
        excerpt(pruneLength: 20)
        body
      }
    }
  }
`;

export const Head = () => <Seo title="Blog" />;
