import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

interface ILayoutProps {
    children: React.ReactNode;
    title?: string;
}
const Layout = ({ children, title }: ILayoutProps) => {
    return (
        <div className="p-12">
            <Head>
                <title>{title ?? '50 projects'}</title>
            </Head>
            <Link href="/expanding-cards">
                <a className="hover:underline text-blue-500">Expanding Cards</a>
            </Link>
            {children}
        </div>
    );
};

export default Layout;
