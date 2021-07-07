import { graphql, useStaticQuery} from 'gatsby';

const useHeader = () => {

    const data = useStaticQuery(graphql`query {
        allDatoCmsHeader(filter: {slug: {eq: "main"}}) {
          nodes {
            title
            logo {
              fluid( maxWidth: 100 ) {
                ...GatsbyDatoCmsFluid
              }
            }
          }
        }
      }`);

    return data.allDatoCmsHeader.nodes[0];
}

export default useHeader
