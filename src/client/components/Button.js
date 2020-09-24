import { accent1, fontSizeBase } from "./style";
import styled, { css } from "styled-components";

import { darken } from "polished";

const block = css`
  display: block;
  width: 100%;
`;

const stack = css`
  margin-bottom: 12px;
`;

const Button = styled.button`
  background: ${accent1};
  color: #fff;
  border-radius: 4px;
  border: 1px solid ${accent1};
  cursor: pointer;
  display: inline-block;
  font-size: ${fontSizeBase};
  font-weight: 700;
  line-height: 1.5;
  outline: none;
  padding: 4px 20px;
  text-align: center;
  text-decoration: none !important;
  text-transform: uppercase;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  height: 35px;

  &:hover,
  &:focus {
    background: ${darken(0.1, accent1)};
    border-color: ${accent1};
    text-decoration: none;
    color: #fff;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${(props) => (props.block ? block : null)}
  ${(props) => (props.stack ? stack : null)}
`;

export default Button;
