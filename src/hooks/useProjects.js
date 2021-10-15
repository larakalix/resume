import { graphql, useStaticQuery} from 'gatsby';

const useProjects = () => {

    const data = useStaticQuery(graphql`query {
        allDatoCmsProject(
            filter: {locale: {eq: "en"}}
          ) {
            nodes {
              id
              name
              link
              preview {
                fluid( maxWidth: 256 ) {
                 ...GatsbyDatoCmsFluid
                }
              }
            }
          }
        }`);
  
      return data.allDatoCmsProject.nodes;
}

export default useProjects
