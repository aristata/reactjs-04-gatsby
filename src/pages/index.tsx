import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout title="Home">
      <>
        <div>
          <h1>Welcome to Gatsby world 🖐</h1>
        </div>
        <div>
          <StaticImage
            src="https://images.unsplash.com/photo-1625768376503-68d2495d78c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
            alt="Stickers on the wall"
          />
        </div>
      </>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo title="Home" />;

/*************************************************************************************************
 * gatsby-plugin-image
 * - Gatsby Image 플러그인은 다양한 크기와 형식으로 이미지를 생성하는 어려운 부분을 처리합니다
 * - https://www.gatsbyjs.com/plugins/gatsby-plugin-image
 *************************************************************************************************/

/*************************************************************************************************
 * gatsby-plugin-sharp
 * - Sharp 이미지 처리 라이브러리에 구축된 여러 이미지 처리 함수들을 사용할 수 있습니다
 * - 일반적인 웹 이미지 형식을 처리하기 위한 뛰어난 기본 설정을 제공하는 것을 목표로 합니다
 * - https://www.gatsbyjs.com/plugins/gatsby-plugin-sharp
 *************************************************************************************************/

/*************************************************************************************************
 * sharp
 * - 일반적인 형식의 큰 이미지를 더 작고 웹 친화적인 JPEG, PNG, WebP, GIF 및 다양한 크기의 AVIF 이미지로 변환해준다
 *************************************************************************************************/
