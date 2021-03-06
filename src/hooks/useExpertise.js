import { graphql, useStaticQuery} from 'gatsby';

const useExpertise = () => {
    
    const data = useStaticQuery(graphql`query {
        allDatoCmsExpertise(
          filter: {locale: {eq: "en"}}) {
          nodes {
            id
            title
            detail
            place
            year
          }
        }
      }`);

    return data.allDatoCmsExpertise.nodes;
}

export default useExpertise
