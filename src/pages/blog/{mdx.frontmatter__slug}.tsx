import React from "react";
import Layout from "../../components/Layout";
import { graphql } from "gatsby";
import Seo from "../../components/Seo";

interface BlogPostProps {
  data: Queries.PostDetailQuery;
  children: React.ReactNode;
}
export default function BlogPost({ data, children }: BlogPostProps) {
  return (
    <Layout title={data.mdx?.frontmatter?.title ?? "Blog Post"}>
      <div>{children}</div>
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
      }
      excerpt(pruneLength: 10)
    }
  }
`;

export const Head = ({ data }: BlogPostProps) => (
  <Seo title={data.mdx?.frontmatter?.title ?? "Blog Post"} />
);
