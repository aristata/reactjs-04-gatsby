import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";
import { PageProps, graphql } from "gatsby";

const IndexPage = ({ data }: PageProps<Queries.StickersQuery>) => {
  return (
    <Layout title="Welcome to Gatsby world 🖐">
      <>
        <div>
          {/* <StaticImage
            src="https://images.unsplash.com/photo-1625768376503-68d2495d78c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
            alt="Stickers on the wall"
          /> */}
          {data.allContentfulProducts.nodes.map((sticker) => (
            <article>
              <GatsbyImage
                image={getImage(sticker.previewImage?.gatsbyImageData!)!}
                alt={sticker.productName!}
              />
              <p>{sticker.productName}</p>
              <p>{sticker.price}</p>
            </article>
          ))}
        </div>
      </>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query Stickers {
    allContentfulProducts {
      nodes {
        productName
        price
        previewImage {
          gatsbyImageData(height: 250)
        }
      }
    }
  }
`;

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

/*************************************************************************************************
 * contentful
 * - https://www.contentful.com/
 * - Contentful은 모든 디지털 채널에서 콘텐츠를 생성, 관리 및 게시할 수 있는 콘텐츠 플랫폼
 * - 컨텐츠에 대한 상태관리
 * - 이미지 리사이징 및 프리뷰 등 다양한 최적화 기능 제공
 *************************************************************************************************/

/*************************************************************************************************
 * gatsby-source-contentful
 * - https://www.gatsbyjs.com/plugins/gatsby-source-contentful/
 * - 개츠비에서 컨텐츠풀을 사용할 수 있게 해주는 플러그인
 * - 그래프큐엘로 데이터를 사용할 수 있게 만들어져 있다
 *************************************************************************************************/

/*************************************************************************************************
 * dotenv
 * - 리액트 환경변수 관리 라이브러리
 * - gatsby-source-contentful 사용시 API Token 등을 관리하기 위해 dotenv 를 사용하도록 권장하고 있다
 *************************************************************************************************/
