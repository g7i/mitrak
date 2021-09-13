import React from "react";
import {
    CardContent,
    CardImage,
    CardTitle,
    CardWrapper,
    Container,
    ImageWrapper,
    Wrapper
} from "../../../components/styledComponents/Courses";
import {Heading} from "../../../components/styledComponents/GlobalComponents";

export default function Courses() {
    return(
        <Container>
            <Heading>Courses We Offer</Heading>
            <Wrapper>
                <CardWrapper>
                    <ImageWrapper>
                        <CardImage src="https://images.unsplash.com/photo-1631430411956-44b72ddb0ee0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
                    </ImageWrapper>
                    <CardTitle>Faculty of Science</CardTitle>
                    <CardContent>Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi vitae tincidunt mi, et malesuada massa. Sed blandit placerat elit sit amet condimentum.</CardContent>
                </CardWrapper>
                <CardWrapper>
                    <ImageWrapper>
                        <CardImage src="https://images.unsplash.com/photo-1631430411956-44b72ddb0ee0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
                    </ImageWrapper>                    <CardTitle>Faculty of Science</CardTitle>
                    <CardContent>Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi vitae tincidunt mi, et malesuada massa. Sed blandit placerat elit sit amet condimentum.</CardContent>
                </CardWrapper>
                <CardWrapper>
                    <ImageWrapper>
                        <CardImage src="https://images.unsplash.com/photo-1631430411956-44b72ddb0ee0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
                    </ImageWrapper>                    <CardTitle>Faculty of Science</CardTitle>
                    <CardContent>Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi vitae tincidunt mi, et malesuada massa. Sed blandit placerat elit sit amet condimentum.</CardContent>
                </CardWrapper>
            </Wrapper>
        </Container>
    );
}
