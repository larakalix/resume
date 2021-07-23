import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { StaticImage } from "gatsby-plugin-image";

const Content = styled.div`
    padding: 25vh 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0.25rem;
    background-color: #34a1cd;
`;

const Email = styled.a`
    margin-top: 1.5rem;
    margin-bottom: 0;
    padding: 1.5rem 3rem;
`;

const Title = styled.h1`
    margin-top: 0;
    margin-bottom: 4rem;
    color: white;
    font-size: 3.6rem;
    line-height: 1.1;
    font-weight: 700;
    letter-spacing: -0.04em;

    @media (max-width: 768px) {
        text-align: center;
    }
`;

const ContactMe = () => (
    <Content>
        <Title>Got a Project? Let's Talk!</Title>
        <Email href="mailto:uki@live.co.uk">
            <StaticImage
                css={css`
                    max-width: 6rem;
                    margin-bottom: 3rem;
                `}
                src='./../../../assets/result.svg' alt="Inbox" />
        </Email>
    </Content>
);

export default ContactMe
