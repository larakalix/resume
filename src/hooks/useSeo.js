import { graphql, useStaticQuery} from 'gatsby';

const useSeo = () => {

    const data = useStaticQuery(graphql`query {
        datoCmsSite(globalSeo: {}) {
          globalSeo {
            siteName
            fallbackSeo {
              description
              title
            }
          }
        }
      }`);

    return data.datoCmsSite.globalSeo;
}

export default useSeo
