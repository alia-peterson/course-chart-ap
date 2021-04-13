import React from 'react';
import Link from 'next/link';

const Footer = () => {
    
    return (
        <footer>
            <Link href="/contactDevelopers">
                <a className='contact'>Contact the Developers</a>
            </Link>
        </footer>
        
    )
}

export default Footer;

