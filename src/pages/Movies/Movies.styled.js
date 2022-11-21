import styled from "styled-components";

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;

  padding: 20px;
  text-align: center;
  background: linear-gradient(to right, #F37335, #FDC830);
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 18px;
  font-weight: 700;
  border: 1px solid transparent;
  outline: none;
  padding: 5px 10px;
  color: black;

  &::placeholder {
    font: inherit;
    font-size: 16px;
    color: red;
  }

  &:focus-within {
    outline: rgb(0 0 0 / 0%);
    border-color: white;
  }
`;

export const Button = styled.button`
  display: inline-block;
  width: 48px;
  height: 33px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
    box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
      0px 2px 1px rgb(0 0 0 / 20%);
  }
`;
