import React from 'react';
import { css } from '@emotion/react';

const Footer = ({ title }) => {
    
    const year = new Date().getFullYear();

    return (
        <footer css={css`
            color: #55527c;
            font-size: 16px;
            text-align: center;
            letter-spacing: -0.02em;
            margin-top: 6rem;
        `}>
            <p>&copy; {year} { title }</p>
        </footer>
    )
}

export default Footer
