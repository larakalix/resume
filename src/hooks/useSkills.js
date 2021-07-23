import { graphql, useStaticQuery} from 'gatsby';

const UseSkills = () => {

    const data = useStaticQuery(graphql`query {
      allDatoCmsSkill(
          sort: {fields: percentage, order: ASC}
          filter: {locale: {eq: "es"}}
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

export default UseSkills
