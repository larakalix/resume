import * as React from "react";
import Layout from '../components/layout';
import MainContent from '../components/content/main';
import Skills from '../components/content/skills';
import ContactMe from '../components/content/contact';

const IndexPage = () => {
  return (
    <Layout>
      <MainContent />
      <Skills />
      <ContactMe />
    </Layout>
  )
}

export default IndexPage
