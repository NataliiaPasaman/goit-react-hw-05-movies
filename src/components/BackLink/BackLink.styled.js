import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  display: block;
  margin-left: 20px;
  width: 50px; 
  border-radius: 30px;
  align-items: center;
  gap: 4px;
  padding: 16px;
  color: coral;
  background-color: rgba(171, 183, 183, 0.6);
  font-size: 20px;
  text-decoration: none;
  font-weight: 700;
  text-transform: uppercase;

  :hover {
    color: white;
    background: linear-gradient(to right, #F37335, #FDC830);
  }
`;
