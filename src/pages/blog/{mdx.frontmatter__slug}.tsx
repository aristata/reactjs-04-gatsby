import React from "react";
import Layout from "../../components/Layout";
import { graphql } from "gatsby";
import Seo from "../../components/Seo";
import { GatsbyImage, getImage, getImageData } from "gatsby-plugin-image";

interface BlogPostProps {
  data: Queries.PostDetailQuery;
  children: React.ReactNode;
}
export default function BlogPost({ data, children }: BlogPostProps) {
  const headerImage = getImage(
    data.mdx?.frontmatter?.headerImage?.childImageSharp?.gatsbyImageData!!
  );
  return (
    <Layout title={data.mdx?.frontmatter?.title ?? "Blog Post"}>
      <>
        <GatsbyImage
          image={headerImage!!}
          alt={data.mdx?.frontmatter?.title ?? "blog post header image"}
        ></GatsbyImage>
        <div>{children}</div>
      </>
    </Layout>
  );
}

export const query = graphql`
  query PostDetail($frontmatter__slug: String) {
    mdx(frontmatter: { slug: { eq: $frontmatter__slug } }) {
      body
      frontmatter {
        category
        date(formatString: "YYYY.MM.DD")
        slug
        title
        headerImage {
          childImageSharp {
            gatsbyImageData(height: 400, placeholder: DOMINANT_COLOR)
          }
        }
      }
      excerpt(pruneLength: 10)
    }
  }
`;

export const Head = ({ data }: BlogPostProps) => (
  <Seo title={data.mdx?.frontmatter?.title ?? "Blog Post"} />
);
