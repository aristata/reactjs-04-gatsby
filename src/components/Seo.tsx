import { graphql, useStaticQuery } from "gatsby";
import React from "react";

interface Props {
  title: string;
}

/***************************************************************************************************
 * useStaticQuery (정적 쿼리 사용)
 *
 * - useStaticQuery는 빌드 시 리액트 훅을 사용하여 데이터 계층을 쿼리하는 기능을 제공한다
 * - 이를 통해 React 컴포넌트는 삽입될 데이터를 GraphQL 쿼리를 사용해 검색할 수 있다
 * - useStaticQuery 훅은 모든 컴포넌트 또는 페이지에서 사용할 수 있다
 ***************************************************************************************************/
export default function Seo({ title }: Props) {
  const { site } = useStaticQuery<Queries.SeoDataQuery>(graphql`
    query SeoData {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <title>
      {title} | {site?.siteMetadata?.title}
    </title>
  );
}
