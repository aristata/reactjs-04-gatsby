import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { PageProps, graphql } from "gatsby";

/*************************************************************************************************
 * gatsby 에서의 라우팅
 *
 * - src/pages/ 경로 아래에 JSX 파일이 위치하면 파일명이 라우팅 이름이 된다
 *************************************************************************************************/
export default function blog({ data }: PageProps<Queries.BlogTitlesQuery>) {
  return (
    <Layout title="Blog">
      <ul>
        {data.allFile.nodes.map((file, index) => (
          <li key={index}>{file.name}</li>
        ))}
      </ul>
    </Layout>
  );
}

export const query = graphql`
  query BlogTitles {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export const Head = () => <Seo title="Blog" />;
