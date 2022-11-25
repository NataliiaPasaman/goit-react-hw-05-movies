import styled from "styled-components";

const CastList = styled.ul`
display: grid;
max-width: calc(100vw - 18px);
grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
grid-gap: 20px;
// margin-top: 20px;
// margin-bottom: 20px;
`;

export const PosterCast = styled.img`
display: block;
width: 250px;
height: auto;
`;

export const TitleCast = styled.h4`
padding: 10px;
// margin-bottom: 30px;
color: black;
font-weight: 700;
font-size: 14px;
line-height: 1.4;
`;