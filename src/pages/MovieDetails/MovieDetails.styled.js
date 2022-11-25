import styled from "styled-components";

export const Container = styled.div`
margin: 0 auto;
padding 20px;
display: flex;
align-items: flex-start;
Justify-content: flex-start;
flex-wrap: wrap;
`;

export const Button = styled.button`
background-color: orange;
padding: 15px;
margin-left: 20px;
text-align: center;
width: 60px;
`;

export const PosterMovie = styled.img`
    display: block;
    width: 450px;
    height: auto;
`;

export const ContainerDescription = styled.div`
margin-left: 40px;
width: 870px;
`;

export const MovieTitle = styled.h2`
  padding: 10px;
  margin-bottom: 30px;
  color: black;
  font-weight: 700;
  font-size: 38px;
`;

export const MovieInfo = styled.span`
display: block;
margin-bottom: 10px;
font-size: 28px;
color: black;
font-weight: 700;
`;

export const Info = styled.p`
font-size: 20px;
line-height: 1.8;
padding: 15px;
margin-bottom: 40px;
box-shadow: 3px 5px 16px 4px rgba(227,147,89,0.75);
`;

export const ContainerDetail = styled.div`
margin-top: 30px;
padding 20px;
box-shadow: 3px 5px 16px 4px rgba(227,147,89,0.75);
`;

export const TitleDetail = styled.h3`
width: 1300px;
padding: 8px;
margin-bottom: 20px;
font-size: 20px;
line-height: 1.5;
`;

export const ListDetails = styled.ul`
padding: 8px;
border-bottom: solid 3px tomato;
`;

export const ItemDetails = styled.li`
padding: 10px;
font-size: 20px;
font-weight: 500;

&:hover {
  background: linear-gradient(to right, #F37335, #FDC830);
}
`;