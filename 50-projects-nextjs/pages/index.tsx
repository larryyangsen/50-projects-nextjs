import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import Layout from '../components/layout';

const Home: NextPage = () => {
    return (
        <div className="container">
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout title="Home">
                <h1 className="text-center my-24 font-black tracking-tight text-6xl">Home Page</h1>
            </Layout>
        </div>
    );
};

export default Home;
