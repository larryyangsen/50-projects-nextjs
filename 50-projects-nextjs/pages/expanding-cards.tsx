import React from 'react';
import ExpandingCards from '../components/expanding-card';
import Layout from '../components/layout';

const cards = [
    {
        id: '1',
        imageUrl: 'http://picsum.photos/600',
        title: 'Card 1',
    },
    {
        id: '2',
        imageUrl: 'http://picsum.photos/500',
        title: 'Card 2',
    },
    {
        id: '3',
        imageUrl: 'http://picsum.photos/700',
        title: 'Card 3',
    },
];

const ExpandingCardsPage = () => {
    return (
        <Layout title="Expanding Cards">
            <ExpandingCards cards={cards} />
        </Layout>
    );
};

export default ExpandingCardsPage;
