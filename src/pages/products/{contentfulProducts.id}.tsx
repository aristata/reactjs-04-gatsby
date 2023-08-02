import React from "react";
import Layout from "../../components/Layout";
import { PageProps, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ProductDetail = ({ data }: PageProps<Queries.ProductQuery>) => {
  const image = getImage(
    data.contentfulProducts?.previewImage?.gatsbyImageData!
  );
  return (
    <Layout title={"Product Detail"}>
      <div>
        <GatsbyImage alt={"Product image"} image={image!} />
        <p>{data.contentfulProducts?.productName!}</p>
        <p>{data.contentfulProducts?.price!}</p>
      </div>
    </Layout>
  );
};

export default ProductDetail;

export const query = graphql`
  query Product($id: String!) {
    contentfulProducts(id: { eq: $id }) {
      productName
      price
      previewImage {
        gatsbyImageData(height: 250, placeholder: BLURRED)
      }
    }
  }
`;
