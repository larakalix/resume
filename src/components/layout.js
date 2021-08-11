import React from 'react';
import { Global, css } from '@emotion/react';
import Helmet from 'react-helmet';
import Header from '../components/header';
import Footer from '../components/footer';
import useSeo from '../hooks/useSeo';
import "normalize.css";

const Layout = (props) => {

    const { siteName, description } = useSeo();

    return (
        <>
            <Global
                styles={css`
                    html {
                        font-size: 62.5%;
                        box-sizing: border-box;
                    }

                    *, *:before, *:after {
                        box-sizing: inherit;
                    }

                    body {
                        font-size: 18px;
                        font-size: 1.8rem;
                        line-height: 1.5;
                        font-family: 'PT Sans', sans-serif;
                    }

                    h1, h2, h3 {
                        margin: 0;
                        line-height: 1.5;
                    }

                    h1, h2, h3 {
                        font-family: 'Space Grotesk', sans-serif;
                    }

                    h4, h5, h6, p {
                        font-family: 'Karla', sans-serif;
                    }

                    ul {
                        list-style: none;
                        margin: 0;
                        padding:0;
                    }
                `}
            />
            <Helmet
                meta={
                    [
                        {
                            name: `description`,
                            content: description,
                        },
                        {
                            name: "keywords",
                            content: `Ivan, Lara, Developer, Dev, FrontEnd, BackEnd, Antonio, Kalix, Calix, Kalix.TheMan, uki, ukikalix, reactjs, angular, netcore, ${description}`,
                        },
                    ]
                }
            >
                <title>{ siteName }</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Karla:wght@200;300&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />
            </Helmet>
            <Header />            

            {props.children}

            <Footer title={ siteName } />
        </>
    )
}

export default Layout
