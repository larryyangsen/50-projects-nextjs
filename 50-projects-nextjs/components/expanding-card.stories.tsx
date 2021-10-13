import { ComponentStory, ComponentMeta } from '@storybook/react';
import ExpandingCards from './expanding-card';

export default {
    title: 'Components/Expanding Cards',
    component: ExpandingCards,
} as ComponentMeta<typeof ExpandingCards>;

const Template: ComponentStory<typeof ExpandingCards> = (args) => <ExpandingCards {...args} />;
export const Default = Template.bind({});

Default.args = {
    width: '500px',
    cards: [
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
    ],
};
