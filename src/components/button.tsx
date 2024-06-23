/**
 * button style css referred to
 * https://codyhouse.co/blog/post/vertical-text-alignment-in-buttons-and-inputs
 */

import styled from 'styled-components';

const Button = styled.button`
  justify-content: center;
  align-items: center;
  height: 2rem;
  font-size: 1rem;
  background-color: #f8f7f2;
  border: 1px solid #dcdcdc;
  border-color: transparent;
  border-radius: 0.25em;
  margin: 5px;
  padding: 0.1rem 1.5rem;
  vertical-align: top;
  font-weight: bold;
  user-select: none;

  transition: 0.2s;

  &:hover {
    background-color: #474c59;
    color: #f8f7f2;
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 2px #474c598e;
  }

  &:active {
    transform: translateY(2px);
  }
`;

export default Button;
