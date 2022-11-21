import styled from "styled-components";

export const MovieItem = styled.li`
border-radius: 2px;
width: 450px;
box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 
0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const CardWrapper = styled.div`
  border-radius: 4px;

  > a {
    text-decoration: none;
  }
`;
export const PosterMovie = styled.img`
    width: 100%;
    height: 650px;
    object-fit: contain;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
        transform: scale(1.03);
    }
`;

export const MovieName = styled.h2`
  padding: 6px;
  margin-top: 10px;
  margin-bottom: 0;
  color: black;
  font-weight: 700;
  font-size: 28px;
`;

export const MovieRaiting = styled.p`
  padding: 6px;
  margin-top: 10px;
  margin-bottom: 0;
  color: Coral;
  font-weight: 700;
  font-size: 20px;
`;
