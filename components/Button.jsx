import { primary } from "@/lib/colors";
import styled, { css } from "styled-components";

export const ButtonStyle = css`
  border: none;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  svg {
    height: 16px;
    margin-right: 5px;
  }

  ${(props) =>
    props.block &&
    css`
      display: block;
      width: 100%;
    `}

  ${(props) =>
    props.white &&
    !props.outline &&
    css`
      background: white;
      color: #000;
    `}

  ${(props) =>
    props.white &&
    props.outline &&
    css`
      background: transparent;
      color: white;
      border: 1px solid white;
    `}

    ${(props) =>
    props.black &&
    !props.outline &&
    css`
      background: black;
      color: white;
    `}

  ${(props) =>
    props.black &&
    props.outline &&
    css`
      background: transparent;
      color: black;
      border: 1px solid black;
    `}

  ${(props) =>
    props.primary &&
    !props.outline &&
    css`
      background: ${primary};
      color: #fff;
      border: 1px solid ${primary};
    `}

    ${(props) =>
    props.primary &&
    props.outline &&
    css`
      background: transparent;
      color: ${primary};
      border: 1px solid ${primary};
    `}

  ${(props) =>
    props.size === "l" &&
    css`
      font-size: 1.2rem;
      padding: 10px 20px;
      svg {
        height: 20px;
      }
    `}
`;

const StyledButton = styled.button`
  ${ButtonStyle}
`;

export default function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}
