import React from 'react';
import { css } from '@emotion/react';

const Footer = ({ title }) => (
    <footer css={css`
        color: #55527c;
        font-size: 16px;
        text-align: center;
        letter-spacing: -0.02em;
        margin-top: 6rem;
    `}>
        <p>&copy; {new Date().getFullYear()} { title }</p>
    </footer>
);

export default Footer
