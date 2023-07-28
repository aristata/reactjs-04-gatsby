import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function AboutUs() {
  return (
    <Layout title="About us">
      <div>
        <h1>We are online store</h1>
      </div>
    </Layout>
  );
}

export const Head = () => <Seo title="About us" />;
