import styled from "styled-components";

export const ListReviews = styled.ul`
padding: 8px;
margin-top: 20px;
margin-bottom: 10px;
`;

export const ItemReviews = styled.li`
margin-bottom: 25px;

&:last-child {
    margin-bottom: 0;
}
`;

export const Username = styled.h4`
margin-bottom: 10px;
font-size: 22px;
font-weight: 700;
line-height: 1.5;
text-indent: 2%;
color: tomato;
`;

export const PostReviews = styled.p`
font-size: 16px;
font-weight: 500;
line-height: 1.8;
text-indent: 4%;
white-space: normal;
text-align: justify;
`;