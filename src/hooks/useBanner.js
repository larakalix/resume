import { graphql, useStaticQuery} from 'gatsby';

const useMainBanner = () => {

    const data = useStaticQuery(graphql`query {
        allDatoCmsBanner(filter: {slug: {eq: "main"}}) {
           nodes {
             description
             header
             link
             download
             primarycolor {
               hex
             }
             secondarycolor {
               hex
             }
             thumbnail {
               fluid( maxWidth: 256 ) {
                ...GatsbyDatoCmsFluid
               }
             }
           }
         }
       }`);

    return data.allDatoCmsBanner.nodes[0];
}

export default useMainBanner
