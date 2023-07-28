import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

/*************************************************************************************************
 * gatsby 에서의 라우팅
 *
 * - src/pages/ 경로 아래에 JSX 파일이 위치하면 파일명이 라우팅 이름이 된다
 *************************************************************************************************/
const blog = () => {
  return (
    <Layout title="Blog">
      <div>
        <h1>Blog page</h1>
      </div>
    </Layout>
  );
};

export default blog;

export const Head = () => <Seo title="Blog" />;
