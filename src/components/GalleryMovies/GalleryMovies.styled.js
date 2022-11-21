import styled from "styled-components";

export const MoviesList = styled.ul`
  display: grid;
  max-width: calc(100vw - 18px);
  grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
  grid-gap: 20px;
  margin-top: 20px;
  margin-bottom: 20px;

  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;