import { graphql, useStaticQuery} from 'gatsby';

const UseSkills = () => {

    const data = useStaticQuery(graphql`query {
      allDatoCmsSkill(sort: {fields: percentage, order: ASC}) {
          nodes {
            percentage
            title
            tech
            id
          }
        }
      }`);

    return data.allDatoCmsSkill.nodes;
}

export default UseSkills
