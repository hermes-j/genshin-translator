/**
 * button style css referred to
 * https://codyhouse.co/blog/post/vertical-text-alignment-in-buttons-and-inputs
 */

import styled from 'styled-components';
import '../font/font.css';

const KeyButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  user-select: none;
  
  background-color: #f8f7f2;
  margin: 2px;
  border-color: transparent;
  border-radius: 0.25em;
  box-shadow: 0 1px 4px #ddd;
  
  color: black;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  transition: .2s;
  
  &:hover {
    background-color: #474C59;
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

export default KeyButton;
