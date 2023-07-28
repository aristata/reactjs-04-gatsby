import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const IndexPage = () => {
  return (
    <Layout title="Home">
      <div>
        <h1>Welcome to Gatsby world 🖐</h1>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo title="Home" />;
