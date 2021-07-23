import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { StaticImage } from "gatsby-plugin-image";

const Content = styled.div`
    padding: 10rem 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0.25rem;
    background-color: #34a1cd;

    h1 {
        margin-top: 0px;
        margin-bottom: 16px;
        color: white;
        font-size: 38px;
        line-height: 1.1;
        font-weight: 700;
        letter-spacing: -0.04em;
    }

    @media (max-width: 768px) {
        padding: 5rem 0;
    }
`;

const Email = styled.a`
    margin-top: 0px;
    margin-bottom: 0px;
    color: white;
    font-size: 28px;
    line-height: 1;
    font-weight: 700;
    letter-spacing: -0.03em;
    text-decoration: none;
`;

const ContactMe = () => (
    <Content>
        <StaticImage
            css={css`
                max-width: 6rem;
                margin-bottom: 3rem;
            `}
            src='./../../../assets/result.svg' alt="Inbox" />
        <h1>Got a Project? Lets Talk!</h1>
        <Email href="mailto:uki@live.co.uk">uki@live.co.uk</Email>
    </Content>
);

export default ContactMe
