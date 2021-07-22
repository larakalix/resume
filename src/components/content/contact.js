import React from 'react';
import styled from '@emotion/styled';

const Content = styled.div`
    padding: 30vh 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0.25rem;
    background-color: #e9f9ff;

    h1 {
        margin-top: 0px;
        margin-bottom: 16px;
        color: #130f49;
        font-size: 38px;
        line-height: 1.1;
        font-weight: 700;
        letter-spacing: -0.04em;
    }
`;

const Email = styled.a`
    margin-top: 0px;
    margin-bottom: 0px;
    color: #b4b2c5;
    font-size: 28px;
    line-height: 1;
    font-weight: 700;
    letter-spacing: -0.03em;
    text-decoration: none;
`;

const ContactMe = () => {
    return (
        <Content>
            <h1>Got a Project? Lets Talk!</h1>
            <Email href="mailto:uki@live.co.uk">uki@live.co.uk</Email>
        </Content>
    )
}

export default ContactMe
