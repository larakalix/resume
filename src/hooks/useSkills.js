import { graphql, useStaticQuery} from 'gatsby';

const useSkills = () => {

    const data = useStaticQuery(graphql`query {
      allDatoCmsSkill(
          sort: {fields: percentage, order: ASC}
          filter: {locale: {eq: "en"}}
        ) {
          nodes {
            percentage
            title
            description
            id
            icon {
              fluid( maxWidth: 256 ) {
               ...GatsbyDatoCmsFluid
              }
            }
          }
        }
      }`);

    return data.allDatoCmsSkill.nodes;
}

export default useSkills
