import * as Styled from "./styled";

/**
 * Faq section component
 */
export const FaqSection = () => {
    return (
        <Styled.Wrapper>
            <Styled.Subtitle weight={600}>FAQ</Styled.Subtitle>
            <Styled.Title weight={600} size="bigger-title">
                Často kladené otázky
            </Styled.Title>

            <Styled.Items>
                <Item
                    order={1}
                    title="How can I create a custom order?"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum, orci at euismod dapibus, massa ante pharetra tellus. Maecenas interdum, orci at euismod dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum, orci at euismod dapibus, massa ante pharetra."
                />
                <Item
                    order={2}
                    title="How can I create a custom order?"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum, orci at euismod dapibus, massa ante pharetra tellus. Maecenas interdum, orci at euismod dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum, orci at euismod dapibus, massa ante pharetra."
                />
                <Item
                    order={3}
                    title="How can I create a custom order?"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum, orci at euismod dapibus, massa ante pharetra tellus. Maecenas interdum, orci at euismod dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum, orci at euismod dapibus, massa ante pharetra."
                />
            </Styled.Items>
        </Styled.Wrapper>
    );
};

/**
 * Item for faq
 */
const Item = ({ title, description, order }: ItemProps) => {
    return (
        <Styled.Item>
            <Styled.ItemTitle weight={500} size="bigger-body">
                {order}. {title}
            </Styled.ItemTitle>
            <Styled.ItemDescription>{description}</Styled.ItemDescription>
        </Styled.Item>
    );
};

interface ItemProps {
    title: string;
    description: string;
    order: number;
}
