import * as React from "react";
import styled from '@emotion/styled';
import Layout from '../components/layout';
import MainContent from '../components/content/main';
import Skills from '../components/content/skills';
import Expertise from '../components/content/expertise';
import Projects from '../components/content/projects';
import ContactMe from '../components/content/contact';

const MainBox = styled.div`
  max-width: 75vw;
  margin: 0 auto;
`;

const IndexPage = () => {
  return (
    <Layout>
      <MainBox>
        <MainContent />
        <Skills />
        <Expertise />
        <Projects />
        <ContactMe />
      </MainBox>
    </Layout>
  )
}

export default IndexPage
