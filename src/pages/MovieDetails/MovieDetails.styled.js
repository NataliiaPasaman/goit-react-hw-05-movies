import styled from "styled-components";

export const Container = styled.div`
margin: 0 auto;
padding 20px;
display: flex;
align-items: flex-start;
Justify-content: flex-start;
`;

export const PosterMovie = styled.img`
    display: block;
    width: 450px;
    height: auto;
`;

export const ContainerDescription = styled.div`
margin-left: 25px;
padding: 15px;
`;

export const MovieTitle = styled.h2`
  padding: 10px;
  margin-bottom: 30px;
  color: black;
  font-weight: 700;
  font-size: 38px;
`;

export const MovieDate = styled.span`
display: block;
margin-bottom: 10px;
font-size: 28px;
color: black;
font-weight: 700;
`;

export const Info = styled.p`
font-size: 20px;
line-height: 1.8;
padding: 6px;
margin-bottom: 40px;
box-shadow: 3px 5px 16px 4px rgba(227,147,89,0.75);
`;