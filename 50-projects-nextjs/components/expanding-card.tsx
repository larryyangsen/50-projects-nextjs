import { useState } from 'react';

interface IExpandingCardsProps {
    cards: { id: string; imageUrl: string; title: string }[];
    width?: number | string;
    height?: number | string;
}

const ExpandingCards = ({ cards, width = '90vw', height = '50vh' }: IExpandingCardsProps) => {
    const [activeId, setActiveId] = useState('1');
    const onClick = (id: string) => () => {
        setActiveId(id);
    };

    if (!cards.length) {
        return <div className="w-1 h-1 bg-block" />;
    }

    return (
        <div className="flex" style={{ width }}>
            {cards.map(({ id, imageUrl, title }, index) => (
                <div
                    key={id}
                    style={{ backgroundImage: `url(${imageUrl})`, height }}
                    onClick={onClick(id)}
                    className={`${
                        activeId === id ? 'active' : ''
                    } cursor-pointer relative ease-in-out duration-700 text-white flex-1 m-2 bg-cover bg-center bg-no-repeat rounded-3xl h-auto`}
                >
                    <h3 className="transition-opacity duration-300 text-xl absolute bottom-2 left-2 opacity-0">
                        {title}
                    </h3>
                </div>
            ))}
            <style jsx>
                {`
                    .active {
                        flex: 5;
                    }
                    .active h3 {
                        opacity: 1;
                    }
                `}
            </style>
        </div>
    );
};

export default ExpandingCards;
