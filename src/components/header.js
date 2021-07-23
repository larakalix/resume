import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'gatsby-image';
import useHeader from '../hooks/useHeader';

const Content = styled.ul`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    li {
        padding: 1rem;
    }
`;

const LogoBox = styled.div`
    background-color: white;
    padding: 0.4rem;
    border-radius: 0.25rem;
`;

const Header = () => {

    const { title, logo } = useHeader();

    return (
        <header css={css`
                padding: 1rem;
            `}>
            <Content>
                <li css={css`
                    opacity: 0;
                `}>{title}</li>
                <li>
                    <LogoBox>
                        <Image css={css`
                            max-width: 100px;
                            margin-left: auto;
                        `}
                        fluid={logo.fluid} />
                    </LogoBox>
                </li>
            </Content>
        </header>
    )
}

export default Header
