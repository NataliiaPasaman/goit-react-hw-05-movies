import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 30px 20px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    width: 280px;
    display: flex;
    justify-content: space-between;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  color: black;
  font-weight: 500;
  font-size: 32px;

  &:hover {
    color: white;
    background: linear-gradient(to right, #F37335, #FDC830);

  }

  &.active {
    color: white;
    background-color: Coral;
  }
`;
