import styled from "styled-components";

export const CastList = styled.ul`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
grid-gap: 20px;
padding-top: 20px;
padding-bottom: 10px;
`;

export const CastItem = styled.li`
border-radius: 2px;
width: 200px;
`;

export const ImageWrapper = styled.div`
width: 200px;
height: 300px;
`

export const PosterCast = styled.img`
display: block;
width: 200px;
height: auto;
`;

export const TitleCast = styled.h4`
padding: 10px;
color: black;
font-weight: 700;
font-size: 16px;
line-height: 1.4;
`;