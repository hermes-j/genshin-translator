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
  background-color: #f5f5f5;
  border: 1px solid #dcdcdc;
  border-color: transparent;
  border-radius: 0.25em;
  margin: 5px;
  padding: 0.1rem 1.5rem;
  vertical-align: top;
  font-weight: bold;
  user-select: none;

  transition: .2s;
  
  &:hover {
    background-color: #3e90e8;
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 2px hsla(220, 90%, 56%, 0.2);
  }
  
  &:active {
    transform: translateY(2px);
  }
`;

export default Button;
