import { graphql, useStaticQuery} from 'gatsby';

const UseSkills = () => {

    const data = useStaticQuery(graphql`query {
        allDatoCmsSkill {
          nodes {
            title
            tech
            id
          }
        }
      }`);

    return data.allDatoCmsSkill.nodes;
}

export default UseSkills
