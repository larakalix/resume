import styled from '@emotion/styled';

export const GridList = styled.div`
    margin: 4rem auto 0 auto;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 3rem
    }
`;

export const Content = styled.div`
    padding: 7rem 0;
    margin: 0 auto;

    @media (max-width: 768px) {
        padding: 3rem 0;
    }
`;

export const Header = styled.h1`
    margin-top: 0px;
    margin-bottom: 3rem;
    color: #130f49;
    font-size: 64px;
    line-height: 1;
    font-weight: 700;
    letter-spacing: -0.04em;
    text-align: center;
`;

export const LittleHeader = styled.h5`
    text-align: center;
    margin: 0;
    font-size: 1.8rem;
    text-transform: uppercase;
`

export const SingleContent = styled.div`
    position: relative;
    padding: 2rem 3rem 5rem;
    border-radius: 0.25rem;
    background-color: #fff;
    margin-bottom: 2.8rem;
    -webkit-transition: box-shadow 500ms ease;
    transition: box-shadow 500ms ease;

    &:hover {
        box-shadow: 11px 11px 130px 70px rgb(206 212 224 / 18%);
    }

    h1 {
        color: #130f49;
        font-size: 3.2rem;
        line-height: 1.2;
        font-weight: 600;
        letter-spacing: -0.03em;
        margin-bottom: 1.4rem;
    }

    @media (max-width: 768px) {
        padding-top: 4rem;
    }
`;

export const SingleContentDescription = styled.div`
    color: #55527c;
    font-size: 1.8rem;
    line-height: 1.6;
    font-weight: 400;
    letter-spacing: -0.05em;
    text-align: justify;
`;

export const GreenButton = styled.a`
    background-color: #34d399;
    color: white;
    padding: 1.2rem;
    border-radius: 0.25rem;
    text-decoration: none;
`;

export const PreviewBox = styled.div`
    max-width: 30rem;
    margin-bottom: 3rem;
    margin-top: 1rem;
    border-radius: 0.25rem;
    overflow: hidden;
    max-height: 20rem;
`;
