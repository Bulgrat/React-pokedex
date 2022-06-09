import React from 'react';
import Navbar from './Navbar';

export default function Layout({ children, title }) {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main className='text-center' style={{ 'marginTop': '90px' }}>
                {children}
            </main>
        </>)
}